import axios from "axios";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function ChartComponent() {
  const [data, setData] = React.useState();
  const colors = [
    "#ea5545",
    "#f46a9b",
    "#ef9b20",
    "#edbf33",
    "#ede15b",
    "#bdcf32",
    "#87bc45",
    "#27aeef",
    "#b33dc6",
  ];
  axios.get("http://localhost:3001/budget").then((res) => {
    const dataLabels = res.data.myBudget.map((d) => d.budget);
    const dataset = res?.data.myBudget.map((d) => d.budget);
    setData({
      labels: dataLabels,
      datasets: [
        {
          data: dataset,
          label: "Budget",
          backgroundColor: colors,
        },
      ],
    });
  });
  return <>{data && <Doughnut data={data} />}</>;
}

export default ChartComponent;
