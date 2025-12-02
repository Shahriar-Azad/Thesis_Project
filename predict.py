from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import pickle
import os
import numpy as np
# from mangum import Mangum

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "./model.pkl")
ENCODER_PATH = os.path.join(BASE_DIR, "./encoder.pkl")

# -------------------------------
# Load Model + Encoder
# -------------------------------
with open(MODEL_PATH, "rb") as f:
    model = pickle.load(f)

with open(ENCODER_PATH, "rb") as f:
    encoder = pickle.load(f)

# -------------------------------
# Input Encoding (simple)
# -------------------------------
def encode_inputs(inputs: list):
    encoded = np.array([encoder.transform([i])[0] for i in inputs])
    return encoded.reshape(1, -1)

# -------------------------------
# Predict Top 3 Laws
# -------------------------------
def predict_top3_laws(inputs: list):
    encoded = encode_inputs(inputs)
    proba = model.predict_proba(encoded)[0]
    top3_idx = np.argsort(proba)[-3:][::-1]
    top3_laws = model.classes_[top3_idx]

    return {
        "predicted_law": top3_laws[0],
        "suggested_laws": list(top3_laws[1:])
    }

# -------------------------------
# FastAPI App
# -------------------------------
app = FastAPI(title="Legal Assessment API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Answers(BaseModel):
    answers: dict

# -------------------------------
# Prediction Endpoint
# -------------------------------
@app.post("/predict")
def predict_endpoint(data: Answers):
    answers_dict = data.answers

    question_keys_ordered = [
        "checkExpiry", "askChange", "reportIssue", "correctProduct",
        "clearLabel", "misleadingAds", "weightDiscrepancy", "overcharged",
        "harmfulProduct", "sellerResponsibility", "tookAction", "issueResolved",
        "properLabeling", "counterfeit", "harmfulSubstances"
    ]

    input_values = [answers_dict.get(k, "No") for k in question_keys_ordered]
    result = predict_top3_laws(input_values)

    return result

# handler = Mangum(app)
