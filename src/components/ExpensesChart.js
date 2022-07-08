import { Bar} from "react-chartjs-2";
import {Chart}from "chart.js" 
import { Chart as ChartJs } from "chart.js/auto";


const ExpensesChart = ({ expenses }) => {
    Chart.defaults.font.family = 'DM Sans'; 
    Chart.defaults.color = 'hsl(28, 10%, 53%)';  
  const expenseData = {
    labels: expenses.map((data) => data.day),
    datasets: [
      {
        label: "Expenses a Day",
        data: expenses.map((data) => data.amount),
        backgroundColor: [
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(186, 34%, 60%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
        ],
        borderRadius: 5,
        borderSkipped: false, 
        barThickness: 30, 
      },
    ],
  };

  const chartConfig = {
    defaults: {
        font: {size: 40}
    }, 
    plugins: {
        tooltip:{
            callbacks:{
                title: function(context){
                    return `$${context[0].formattedValue}`
                }, 
                label: function(context){
                }
            }
        },
      legend: {
        display: false,
      },
    },
    
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: { drawBorder: false, drawOnChartArea: false, display: false },
      },
      x: {
        grid: {
          drawBorder: false,
          drawOnChartArea: false,
          display: false,
        },
      },
    },
  };

  return <Bar data={expenseData} options={chartConfig} />;
};

export default ExpensesChart;
