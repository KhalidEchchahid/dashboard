import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = () => {
  const data = [
    { date: '2023-06-01', temperature: 25 },
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
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
