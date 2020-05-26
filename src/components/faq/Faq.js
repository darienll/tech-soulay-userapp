import { Component } from "react";
import React from 'react';
import './Faq.css'
import { Collapse } from "antd";
const { Panel } = Collapse;

class Faq extends Component {
    render() {
        const text = `
            A dog is a type of domesticated animal.
            Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
        `;
        return (
            <div className="faq">
                <div className="faq__content">
                    <h5>./FAQ</h5>

                    <div className="container">
                        <Collapse defaultActiveKey={['1']}>
                            <Panel header="Как пользоваться вашей системой" key="1">
                            <p>{text}</p>
                            </Panel>
                            <Panel header="This is panel header 2" key="2">
                            <p>{text}</p>
                            </Panel>
                            <Panel header="This is panel header 3" key="3">
                            <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </div>
                </div>

            </div>
        )
    }
}
export default Faq;