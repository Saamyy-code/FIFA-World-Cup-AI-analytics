def generate_analysis(player):
    analysis = (
        f"{player['name']} has scored {player['goals']} goals "
        f"and provided {player['assists']} assists. "
        f"The player maintains a pass accuracy of "
        f"{player['pass_accuracy']}% across "
        f"{player['matches_played']} matches."
    )

    return analysis