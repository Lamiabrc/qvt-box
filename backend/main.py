from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class EmotionScore(BaseModel):
    score: int
    user_type: str

@app.get("/health")
async def health_check():
    return {"status": "Robot est prêt !"}

@app.post("/recommend")
async def recommend(data: EmotionScore):
    if data.score < 1 or data.score > 15:
        return {"error": "Score pas bon !"}
    box = "Box Sérénité" if data.score <= 5 else "Box Passion"
    action = "Fais une petite sieste" if data.score <= 5 else "Danse sur ta musique préférée"
    return {"box": box, "action": action}
