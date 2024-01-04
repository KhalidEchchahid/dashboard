import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
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
        data: data.map(item => item.temperature),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <div>
      <Pie data={chartData} options={chartOptions}/>
    </div>
  );
};

export default PieChart;
