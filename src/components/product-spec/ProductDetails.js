import React, { Component } from 'react';
import phone from '../../assets/iphone.svg'

export default class ProductDetails extends Component {
    render() {
        return(
            <div className="container hero">
                {/* <h1 className="text-center">Reviews</h1> */}
                <div className="row d-flex flex-row justify-content-between align-items-center align-content-center">
                    <div className="col-md-5 col-lg-5 col-xl-4 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                        <div className="iphone-mockup">
                        <img className="device" src={ phone }/>
                            <div className="screen"></div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5 offset-xl-1 desc" data-toggle="tooltip" data-bs-tooltip="">
                        <h1 className="text-center"></h1>
                        <div className="desc_text">
                            <div>
                                <h2>Крутой процессор</h2>
                                <p>l<strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the&nbsp;</p>
                            </div>
                            <div>
                                <h2>Крутой процессор</h2>
                                <p>l<strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                            </div>
                            <div>
                                <h2>Крутой процессор</h2>
                                <p>l<strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            </div>
                            <div>
                                <h2>Крутой процессор</h2>
                                <p>l<strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}