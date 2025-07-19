from fastapi import FastAPI
app = FastAPI()

@app.get("/test")
def test_robot():
    return {"message": "Le robot est allumé !"}

@app.post("/idee")
def idee_bien_etre(score: int):
    if score <= 5:
        return {"box": "Box Sérénité", "idee": "Fais une petite sieste"}
    return {"box": "Box Énergie", "idee": "Danse sur ta musique préférée"}
