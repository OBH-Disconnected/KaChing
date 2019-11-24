import React from "react";
import ReactApexChart from "react-apexcharts";

class AreaChart extends React.Component {
      
  constructor(props) {
    super(props);

    this.state = {
      options: {
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },


        xaxis: {
          type: 'datetime',
          categories: ["2019-09-19T00:00:00", "2019-09-20T00:00:00", "2019-09-21T00:00:00",
            "2019-09-22T00:00:00", "2019-09-23T04:30:00", "2019-09-24T00:00:00",],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy'
          },
        }
      },
      series: [{
        name: 'November',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'October',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
    }
  }

  render() {
    return (
      

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height="250" />
      </div>


    );
  }
}

  export default AreaChart;