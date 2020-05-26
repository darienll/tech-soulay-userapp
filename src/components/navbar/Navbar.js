import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Navbar.css'
import ProfilePage from '../profile/ProfilePage';
import { connect } from 'react-redux';
import { userConstants } from '../../constants';

const { forwardRef, useRef, useImperativeHandle } = React;

class Navbar extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            loggedIn: this.props.loggedIn?.loggedIn
        }
        this.childRef = null;
    }

    logOut = ()=> {
        this.setState({
            loggedIn : false
        })
    }

    handleClick = () => {
        this.childRef.getWrappedInstance().showDrawer();
    }
    render(){
        const { loggedIn } = this.props;

        // console.log(loggedIn)
        return (
            <div className="header-blue">
                <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
                    <div className="container-fluid">
                        <Link to={ '/' } className="navbar-brand">Tech Soulai</Link>
                        <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse"
                            id="navcol-1">
                            <ul className="nav navbar-nav">
                                <li className="nav-item" role="presentation"><a className="nav-link" href="/faq">FAQ</a></li>
                            </ul>
                            <form className="form-inline mr-auto" target="_self">
                                <div className="form-group"><label htmlFor="search-field"><i className="fa fa-search"></i></label><input className="form-control search-field" type="search" id="search-field" name="search"/></div>
                            </form>
                            <div>
                                {
                                    this.state.loggedIn  ?
                                    (
                                        <div>
                                            <ProfilePage  logOut = { this.logOut } ref={ ref => this.childRef = ref }/>
                                            <div className="profile-avatar">
                                                <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} onClick={ this.handleClick }>
                                                    {/* <a onClick={ this.handleClick }>U</a> */}
                                                    U
                                                </Avatar>
                                            </div>
                                        </div>
                                    )
                                    :
                                    (
                                        <div>
                                            <span className="navbar-text"><Link to={ '/login' } className="login-tab" >Log In</Link></span>
                                            <Link to={ '/signup' } className="login" className="btn btn-light action-button" role="button">Sign Up</Link>
                                        </div>
                                    )
                                }
                            </div>
                            </div>
                    </div>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = state => {
    const { loggedIn } = state.authentication;
    return {
        loggedIn : state.authentication
    };

}

export default connect(mapStateToProps) (Navbar);
