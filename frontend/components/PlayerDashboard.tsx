"use client";

import { useEffect, useState, type Dispatch, type SetStateAction, type ComponentType } from "react";
import PlayerCard from "./PlayerCard";
import PlayerSelector from "./PlayerSelector";

type Player = {
  name: string;
  team: string;
  position: string;
  goals: number;
  assists: number;
  pass_accuracy: number;
  matches_played: number;
};

type PlayerSelectorProps = {
  selectedPlayer: string;
  setSelectedPlayer: Dispatch<SetStateAction<string>>;
};

const TypedPlayerSelector = PlayerSelector as ComponentType<PlayerSelectorProps>;

export default function PlayerDashboard() {
  const [selectedPlayer, setSelectedPlayer] = useState("mbappe");
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    async function fetchPlayer() {
      const res = await fetch(
        `http://127.0.0.1:8000/player/${selectedPlayer}`
      );

      const data = await res.json();

      setPlayer(data);
    }

    fetchPlayer();
  }, [selectedPlayer]);

  return (
    <div>
      <TypedPlayerSelector
        selectedPlayer={selectedPlayer}
        setSelectedPlayer={setSelectedPlayer}
      />

      <br />

      {player && <PlayerCard player={player} />}
    </div>
  );
}