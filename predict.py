from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import pickle, os, numpy as np
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "model.pkl")
ENCODER_PATH = os.path.join(BASE_DIR, "encoder.pkl")

# Load model + encoder at startup
try:
    with open(MODEL_PATH, "rb") as f:
        model = pickle.load(f)
    with open(ENCODER_PATH, "rb") as f:
        encoder = pickle.load(f)
    logger.info("✅ Model and encoder loaded successfully")
except Exception as e:
    logger.error(f"❌ Failed to load model or encoder: {e}")
    raise

def encode_inputs(inputs: list):
    """Encode input values using the label encoder"""
    try:
        encoded = np.array([encoder.transform([i])[0] for i in inputs])
        return encoded.reshape(1, -1)
    except Exception as e:
        logger.error(f"❌ Encoding error: {e}")
        raise ValueError(f"Failed to encode inputs: {str(e)}")

def predict_law(inputs: list):
    """Predict applicable law based on encoded inputs"""
    try:
        encoded = encode_inputs(inputs)
        prediction = model.predict(encoded)
        return int(prediction[0])
    except Exception as e:
        logger.error(f"❌ Prediction error: {e}")
        raise ValueError(f"Failed to make prediction: {str(e)}")

app = FastAPI(
    title="Legal Assessment API",
    description="Consumer Rights Law Prediction System",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify exact origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Answers(BaseModel):
    answers: dict

@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "message": "Legal Assessment API is running",
        "version": "1.0.0"
    }

@app.get("/health")
async def health_check():
    """Detailed health check"""
    return {
        "status": "healthy",
        "model_loaded": model is not None,
        "encoder_loaded": encoder is not None
    }

@app.post("/predict")
async def predict_endpoint(data: Answers):
    """Predict applicable law based on user answers"""
    
    logger.info(f"📥 Received prediction request")
    
    try:
        # Define the expected question keys in order
        question_keys_ordered = [
            "checkExpiry", "askChange", "reportIssue", "correctProduct",
            "clearLabel", "misleadingAds", "weightDiscrepancy", "overcharged",
            "harmfulProduct", "sellerResponsibility", "tookAction", "issueResolved",
            "properLabeling", "counterfeit", "harmfulSubstances"
        ]
        
        # Extract values in the correct order, defaulting to "No"
        input_values = [data.answers.get(k, "No") for k in question_keys_ordered]
        
        logger.info(f"📊 Processing inputs: {input_values}")
        
        # Make prediction
        predicted_law = predict_law(input_values)
        
        logger.info(f"✅ Prediction successful: Law {predicted_law}")
        
        return {
            "predicted_law": predicted_law,
            "status": "success"
        }
        
    except ValueError as ve:
        logger.error(f"❌ Validation error: {ve}")
        raise HTTPException(status_code=400, detail=str(ve))
    
    except Exception as e:
        logger.error(f"❌ Unexpected error during prediction: {e}")
        raise HTTPException(
            status_code=500,
            detail=f"Internal server error: {str(e)}"
        )

@app.get("/laws")
async def get_laws():
    """Get list of all available laws"""
    return {
        "total_laws": 19,
        "law_numbers": list(range(1, 20))
    }

# Optional: Add startup event to log when server is ready
@app.on_event("startup")
async def startup_event():
    logger.info("🚀 Legal Assessment API started successfully")

@app.on_event("shutdown")
async def shutdown_event():
    logger.info("🛑 Legal Assessment API shutting down")