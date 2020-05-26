import React from 'react';
import Navbar from '../navbar/Navbar'
import HeaderPage from '../header/HeaderPage'
import LoginPage from '../login/LoginPage';

import './Main.css'
import {
    Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
import Products from '../products/Products';
import { PrivateRoute } from '../secure/Privateroute';
import { history } from '../../helpers/history';
import RegistrationPage from '../registration/RegistrationPage';
import NotFound from '../notfound/NotFound';
import { Layout } from 'antd';
import Faq from '../faq/Faq';

const { Header, Footer, Sider, Content } = Layout;

class Main extends React.Component {
    constructor(props) {
        super(props);
        console.log("in main")

    }
    render() {
        return (
            <div className="main"> 
                    <Router history={ history }>
                        <Navbar/>
                        <div>
                            <Switch>
                                <PrivateRoute exact path='/' component={ HeaderPage }/>
                                <Route path="/login" component={ LoginPage } />
                                <Route path="/signup" component={ RegistrationPage } />
                                <Route path="/faq" component={ Faq } />
                                <PrivateRoute path="/products/:query" component={ Products }>
                                </PrivateRoute>
                                <Route component = { NotFound } />
                            </Switch>
                        </div>
                    </Router>
            </div>
        )
    }
}
export default Main;