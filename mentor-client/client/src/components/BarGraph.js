import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarGraph = ({ studentProgress, width = 400, height = 200 }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      // Initialize Chart.js instance
      chartInstance.current = new Chart(chartContainer.current, {
        type: 'bar',
        data: {
          labels: studentProgress.map(student => student.name), 
          datasets: [{
            label: 'Progress',
            data: studentProgress.map(student => student.progress), 
            backgroundColor: '#d8be90', 
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Progress',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Students',
              },
            },
          },
        },
      });
    }

    // Cleanup function to destroy the chart instance
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [studentProgress]); // Re-render chart if studentProgress changes

  return (
    <div>
      <canvas ref={chartContainer} width={width} height={height} />
    </div>
  );
};

export default BarGraph;