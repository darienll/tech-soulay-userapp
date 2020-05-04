import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';

const data = {
  labels: ['gpu', 'cpu', 'ram', 'ssd', 'cores','hertz'],
  datasets: [
    // {
    //   label: 'My First dataset',
    //   backgroundColor: 'rgba(179,181,198,0.2)',
    //   borderColor: 'rgba(179,181,198,1)',
    //   pointBackgroundColor: 'rgba(179,181,198,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(179,181,198,1)',
    //   data: [65, 59, 90, 81, 56, 55, 40]
    // },
    {
      label: 'Характеристики',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100]
    } 
  ]
};

export default class RadarExample extends Component {
  constructor(props) {
      super(props);
      let productData = this.props.productData;
      data.datasets[0].data = [productData?.gpu_rate, productData?.cpu_rate, this.ramRating(productData?.ram),this.ssdRating(productData?.ssd) , (productData?.cores / 16) * 100, (productData?.hertz / 4000) * 100]
      console.log(data.datasets)

  }
  ramRating(ram) {
    if (ram >= 16) return 100;
    if (ram >= 8) return 75;
    if (ram >= 4) return 50;
    if (ram >= 2) return 25;
    return 0;
  }
  ssdRating(ssd) {
    return ssd ? 100 : 0;
  }
  render() {
    return (
      <div>
        <Radar data={data} />
      </div>
    );
  }
}