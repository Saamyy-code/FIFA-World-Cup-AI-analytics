"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

type Player = {
    name: string;
    team: string;
    position: string;
    goals: number;
    assists: number;
    pass_accuracy: number;
    matches_played: number;
};

export default function PlayerChart({ player }: { player: Player }) {
    const data = {
        labels: [
            "Goals",
            "Assists",
            "Pass Accuracy",
            "Matches Played",
        ],
        datasets: [
            {
                label: player.name,
                data: [
                    player.goals,
                    player.assists,
                    player.pass_accuracy,
                    player.matches_played,
                ],
                backgroundColor: [
                    "#3B82F6",
                    "#10B981",
                    "#F59E0B",
                    "#EF4444",
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: "white",
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "white",
                },
            },
            y: {
                ticks: {
                    color: "white",
                },
            },
        },
    };

    return (
        <div style={{ width: "700px", marginTop: "20px" }}>
            <Bar data={data} options={options} />
        </div>
    );
}