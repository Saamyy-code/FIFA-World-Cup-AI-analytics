type Player = {
  name: string;
  team: string;
  position: string;
  goals: number;
  assists: number;
  pass_accuracy: number;
  matches_played: number;
};

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <div>
      <h2>{player.name}</h2>

      <p>Team: {player.team}</p>
      <p>Position: {player.position}</p>
      <p>Goals: {player.goals}</p>
      <p>Assists: {player.assists}</p>
      <p>Pass Accuracy: {player.pass_accuracy}%</p>
      <p>Matches Played: {player.matches_played}</p>
    </div>
  );
}