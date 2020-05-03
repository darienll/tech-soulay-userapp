import React, { Component } from "react";
import { Result, Button } from 'antd';

import './NotFound.css'
import { Link } from "react-router-dom";
class NotFound extends Component {
    render() {
        return(
            <div className="notFound">
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Link to = { '/' }>
                                <Button type="primary">Back Home</Button>
                           </Link>}
                />
            </div>
        )
    }
}
export default NotFound