import React from "react";
import ReactApexChart from "react-apexcharts";

class DonutChart extends React.Component {      
    constructor(props) {
      super(props);

      this.state = {
        options: {
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          theme: {
            monochrome: {
              enabled: true,
              color: '#1976d2',
              shadeTo: 'light',
            }
          },
          title: {
            text: "When you spend the most?"
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
        series: [25, 15, 44, 55, 41, 17],
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