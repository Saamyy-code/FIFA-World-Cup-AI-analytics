from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def home():
    return {
        "message": "FIFA World Cup AI Backend Running"
    }


@app.get("/player/mbappe")
def get_player():
    return {
        "name": "Kylian Mbappe",
        "team": "France",
        "position": "Forward",
        "goals": 5,
        "assists": 2,
        "pass_accuracy": 91,
        "matches_played": 4
    }