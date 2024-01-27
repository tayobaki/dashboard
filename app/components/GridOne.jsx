"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const options = {
  plugins: {
    legend: {
      position: "top",
    },
  },
  maintainAspectRatio: false,
  responsive: true,
};

export const data = {
  labels,
  datasets: [
    {
      id: 1,
      label: "",
      data: [
        5500, 20000, 14203, 4063, 26000, 8000, 45000, 9000, 23000, 32000, 4400,
        4500, 50000,
      ],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderRadius: 20,
    },
  ],
};

export default function GridOne() {
  return (
    <div className=" w-full h-[255px] flex items-stretch justify-stretch">
      <Bar data={data} options={options} />
    </div>
  );
}
