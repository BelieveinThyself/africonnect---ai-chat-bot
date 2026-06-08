import os
import json
os.environ["TRANSFORMERS_CACHE"] = "/opt/render/project/src/.cache"
os.environ["SENTENCE_TRANSFORMERS_HOME"] = "/opt/render/project/src/.cache"
from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer

app = FastAPI(title="Local AI Brain")
#Load AI model once when server starts
model = SentenceTransformer('all-MiniLM-L6-v2')
# Load fake suppliers once at startup.
with open("suppliers.json", "r")as f:
	SUPPLIERS = json.load(f)

@app.post("/rank-by-distance")
def rank_by_distance(commodity: str, city: str, limit: int = 3):
	filtered = [s for s in SUPPLIERS if s["commodity"] == commodity.lower() and city.lower() in s["city"].lower()]
	ranked = sorted(filtered, key=lambda x: x["km"])[:limit]
	return{"matches": ranked}

@app.post("/rank-by-reliability")
def rank_by_reliabilty(commodity: str, city: str, limit: int = 3):
	filtered = [s for s in SUPPLIERS if s["commodity"] == commodity.lower()]
	ranked = sorted(filtered, key=lambda x: (x["verified"]*50 + x["response_rate"]*0.5), reverse=True)[:limit]
	return{"matches": ranked}

class TextInput(BaseModel):
	text: str

@app.get("/")
def home():
	return {"message": "AI Brain is alive . Go to /docs to test"}

@app.post("/embed")
def get_embedding(data: TextInput):
	embedding = model.encode(data.text).tolist()
	return{ "text": data.text, "vector_size": len(embedding)}

