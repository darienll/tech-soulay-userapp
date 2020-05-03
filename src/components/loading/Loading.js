import { Component } from "react";
import React from 'react';

import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading"
import * as legoData from '../../assets/20793-animation.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoData.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
  }

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: undefined
        }
    }
    render() {
        return(
            <div className="loading">
                <FadeIn>
                    <div class="d-flex justify-content-center align-items-center">
                        <Lottie options={defaultOptions} height={300} width={300} />  
                    </div>
                </FadeIn>
            </div>
        )
    }
}