import React, {Component} from 'react';
import {Radar} from 'react-chartjs-2';

const data = {
    labels: ['gpu', 'cpu', 'ram', 'ssd', 'cores', 'hertz'],
    datasets: [
       
        {
            label: 'Характеристики',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
        },

        {
            label: 'My First dataset',
            backgroundColor: 'rgba(68, 68, 179, 0.2)',
            borderColor: 'rgba(68, 68, 179, 1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: 'rgba(179,181,198,1)',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
          },

        {
            label: 'Характеристики',
            backgroundColor: 'rgba(101, 148, 105, 0.2)',
            borderColor: 'rgba(101, 148, 105, 1)',
            pointBackgroundColor: 'rgba(72, 153, 80, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(72, 153, 80, 1)',
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

export default class RadarExample extends Component {
    constructor(props) {
        super(props);
        let productData = this.props.productData;
        for (let i = 0; i < productData.length; i ++) {
            data.datasets[i].label = productData[i].title;
            data.datasets[i].data = [productData[i]?.gpu_rate, productData[i]?.cpu_rate,
                this.ramRating(productData[i]?.ram), this.ssdRating(productData[i]?.ssd),
                this.coresRating(productData[i]?.cores), (productData[i]?.hertz / 4000) * 100]
        }
        // data.datasets[0].data = [productData?.gpu_rate, productData?.cpu_rate,
        //     this.ramRating(productData?.ram), this.ssdRating(productData?.ssd),
        //     this.coresRating(productData?.cores), (productData?.hertz / 4000) * 100]
    }

    ramRating(ram) {
        if (ram >= 16) return 100;
        if (ram >= 8) return 75;
        if (ram >= 4) return 50;
        if (ram >= 2) return 25;
        return 0;
    }

    coresRating(cores) {
        if (cores >= 8) return 100;
        if (cores >= 6) return 85;
        if (cores >= 4) return 70;
        if (cores >= 2) return 40;
        return 0;
    }

    ssdRating(ssd) {
        return ssd ? 100 : 0;
    }

    render() {
        return (
            <div>
                <Radar data={data}/>
            </div>
        );
    }
}