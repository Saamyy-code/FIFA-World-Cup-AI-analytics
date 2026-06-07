type Props = {
  selectedPlayer: string;
  setSelectedPlayer: (player: string) => void;
};

export default function PlayerSelector({
  selectedPlayer,
  setSelectedPlayer,
}: Props) {
  return (
    <select
      value={selectedPlayer}
      onChange={(e) => setSelectedPlayer(e.target.value)}
    >
      <option value="mbappe">Mbappe</option>
      <option value="messi">Messi</option>
      <option value="ronaldo">Ronaldo</option>
    </select>
  );
}