from fastapi import FastAPI

app = FastAPI()

players = {
    "mbappe": {
        "name": "Kylian Mbappe",
        "team": "France",
        "position": "Forward",
        "goals": 5,
        "assists": 2,
        "pass_accuracy": 91,
        "matches_played": 4
    },
    "messi": {
        "name": "Lionel Messi",
        "team": "Argentina",
        "position": "Forward",
        "goals": 4,
        "assists": 3,
        "pass_accuracy": 89,
        "matches_played": 4
    },
    "ronaldo": {
        "name": "Cristiano Ronaldo",
        "team": "Portugal",
        "position": "Forward",
        "goals": 3,
        "assists": 1,
        "pass_accuracy": 84,
        "matches_played": 4
    }
}

@app.get("/")
def home():
    return {"message": "FIFA World Cup AI Backend Running"}

@app.get("/player/{player_name}")
def get_player(player_name: str):
    return players.get(
        player_name.lower(),
        {"error": "Player not found"}
    )

@app.get("/players")
def get_players():
    return list(players.keys())