import React, { Component } from 'react';
import phone from '../../assets/iphone.svg'
import notebook from '../../assets/notebook2.jpg'

import './ProductDetails.css';
export default class ProductDetails extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.productData);
        let data = this.props.productData;
        console.log(data)
        this.state = {
            desc: {
                cpu: this.specChar(data?.cpu_rate, 1),
                gpu : this.specChar(data?.gpu_rate, 0),
                ssd : data?.ssd,
                ram: this.specChar(data?.ram, 1)
            }
        }
        
        // let data = this.props.productData;
        // console.log(data)
        // this.state = {
        //     desc: {
        //         cpu: this.specChar(data?.cpu_rate, 1),
        //         gpu : this.specChar(data?.gpu_rate, 0),
        //         ssd : data?.ssd
        //     }
        // }
    }
   
    specChar(rate, r) {
        if (rate > 75) return r ? "один из лучших" : "одна из лучших";
        if (rate > 60) return r? "отличный" : "отличная";
        if (rate > 50) return r? "неплохой" : "неплохая";
        return "соответствует вашим нуждам";
    }
    render() {
        let data = this.props.productData
        return(
            <div className="container hero details">
                {/* <h1 className="text-center">Reviews</h1> */}
                <div className="product-header">
                    <h3>{ data?.title }</h3>
                    {/* <h3>Product name long title price data</h3> */}
                </div>
                <div className="price">
                    <h4>Цена: { data?.price } тг </h4>
                </div>
                <div className="row d-flex flex-row  align-items-center align-content-center">
                    <div className="col-md-7 ol-lg-5 col-xl-4 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder ">
                        <div className="iphone-mockup">
                        <img className="device" src={ notebook } height="300px" width="300px"/>
                            <div className="screen"></div>
                        </div>
                    </div>
                    
                    <div className="col-md-10 col-12 col-lg-6 col-xl-5 offset-xl-1 desc" data-toggle="tooltip" data-bs-tooltip="">
                        
                        <div className="desc_text">
                        
                            <div>
                                {/* <h2>Крутой процессор</h2> */}
                                <h3> процессор - { this.state.desc.cpu }  </h3>
                                <p>
                                    { data?.cpu }
                                </p>
                                {/* <p>l<strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the&nbsp;</p> */}
                            </div>
                            <div>
                            <h3>видеокарта -  { this.state.desc.gpu }  </h3>
                                <p>
                                    { data?.gpu }
                                </p>
                            </div>
                            <div>
                                <h3>имеется SSD</h3>
                                <p>
                                    SSD почти в 100 раз быстрее, чем традиционный жесткий диск
                                </p>
                            </div>
                            <div>
                                <h3> оперативная памиять - { this.state.desc.ram } </h3>
                                <p>
                                    { data?.ram } гб
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}