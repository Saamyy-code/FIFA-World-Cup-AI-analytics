async function getPlayerData() {
  const res = await fetch("http://127.0.0.1:8000/player/mbappe");

  if (!res.ok) {
    throw new Error("Failed to fetch player data");
  }

  return res.json();
}

export default async function Home() {
  const player = await getPlayerData();

  return (
    <main style={{ padding: "20px" }}>
      <h1>FIFA World Cup AI Analytics</h1>

      <h2>{player.name}</h2>

      <p>Team: {player.team}</p>
      <p>Position: {player.position}</p>
      <p>Goals: {player.goals}</p>
      <p>Assists: {player.assists}</p>
      <p>Pass Accuracy: {player.pass_accuracy}%</p>
      <p>Matches Played: {player.matches_played}</p>
    </main>
  );
}