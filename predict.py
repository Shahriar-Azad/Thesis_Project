from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import pickle
import os
import numpy as np
from mangum import Mangum

# -------------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "./model.pkl")
ENCODER_PATH = os.path.join(BASE_DIR, "./encoder.pkl")
with open(MODEL_PATH, "rb") as f:
    model = pickle.load(f)
with open(ENCODER_PATH, "rb") as f:
    encoder = pickle.load(f)

# -------------------------------
def encode_inputs(inputs: list):
    encoded = np.array([encoder.transform([i])[0] for i in inputs])
    return encoded.reshape(1, -1)

def predict_law(inputs: list):
    encoded = encode_inputs(inputs)
    prediction = model.predict(encoded)
    return int(prediction[0])

app = FastAPI(title="Legal Assessment API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Answers(BaseModel):
    answers: dict

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
    predicted_law = predict_law(input_values)
    return {"predicted_law": predicted_law}

handler = Mangum(app)
