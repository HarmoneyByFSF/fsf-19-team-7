import React from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale, LinearScale, BarElement, Chart } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement);

const Reports = (totalSum) => {
  const data = {
    labels: ["Expenses", "Savings"],
    datasets: [
      {
        label: "Expenses",
        backgroundColor: "#FF6384",
        data: [12000, 3000], 
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: "category", // Use category scale for x-axis
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "700px", height: "500px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Reports;
