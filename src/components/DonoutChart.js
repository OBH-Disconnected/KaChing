import React from "react";
import ReactApexChart from "react-apexcharts";

class DonutChart extends React.Component {      
    constructor(props) {
      super(props);

      this.state = {
        options: {
          labels: ["FastFoods", "Gas", "Subscriptions", "Coffee ", "Rent"],
          theme: {
            monochrome: {
              enabled: true,
              color: '#1976d2',
              shadeTo: 'light',
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
        series: [69, 150, 120, 60, 1000],
      }
    }

    render() {
      return (
        

        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="100%" />
        </div>
      )}
}
export default DonutChart;