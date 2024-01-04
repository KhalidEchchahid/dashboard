
import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = [
    { date: '2023-06-01', temperature: 5 },
    { date: '2023-06-02', temperature: 28 },
    { date: '2023-06-03', temperature: 30 },
    { date: '2023-06-04', temperature: 26 },
    { date: '2023-06-05', temperature: 24 },
    { date: '2023-06-06', temperature: 27 },
    { date: '2023-06-07', temperature: 29 },
  ];

  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Temperature',
        data: data.map(item => item.temperature),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
