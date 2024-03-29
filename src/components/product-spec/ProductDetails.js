import React, { Component } from 'react';
import phone from '../../assets/iphone.svg'
import notebook from '../../assets/notebook2.jpg'
import computer from '../../assets/computer.jpg'

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
                ram: this.specRam(data?.ram, 1)
            }
        }
    }
   
    specChar(rate, r) {
        if (rate > 75) return r ? "один из лучших" : "все игры можно запускать на максималках";
        if (rate > 60) return r? "очень быстрый" : "подойдет для большинства игр";
        if (rate > 50) return r? "неплохой" : "неплохая";
        return "соответствует вашим нуждам";
    }

    specRam(rate, r) {
        console.log(rate)
        if (rate >= 16) return "хватит на все игры и программы";
        if (rate >= 8) return "хватит на все программы и большинство игр";
        if (rate >= 4) return "достаточная для комфортной работы и оптимизированных игр";
        return "достаточная для работы в офисе";
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
                        <img className="device" src={data?.category_name === "notebooks"? notebook : computer } height="300px" width="300px"/>
                            <div className="screen"></div>
                        </div>
                    </div>
                    
                    <div className="col-md-10 col-12 col-lg-6 col-xl-5 offset-xl-1 desc" data-toggle="tooltip" data-bs-tooltip="">
                        
                        <div className="desc_text">
                        
                            <div>
                                {/* <h2>Крутой процессор</h2> */}
                                <h3> Процессор - { this.state.desc.cpu }  </h3>
                                <p>
                                    { data?.cpu }
                                </p>
                            </div>
                            <div>
                            <h3>Видеокарта -  { this.state.desc.gpu }  </h3>
                                <p>
                                    { data?.gpu }
                                </p>
                            </div>
                            <div>
                                <h3>Имеется SSD</h3>
                                <p>
                                    SSD почти в 100 раз быстрее, чем традиционный жесткий диск
                                </p>
                            </div>
                            <div>
                                <h3> Оперативная память - { this.state.desc.ram } </h3>
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