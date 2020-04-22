import React from 'react';
import Navbar from '../navbar/Navbar'
import Header from '../header/Header'
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
class Main extends React.Component {
    constructor(props) {
        super(props);

        // const { dispatch } = this.props;
        // history.listen((location, action) => {
        //     // clear alert on location change
        //     dispatch(alertActions.clear());
        // });
    }
    render() {
        return (
            <div className="main"> 
            <Router history={ history }>
                    <Navbar/>
                <div className="container">

                    <Switch>
                        <PrivateRoute exact path='/' component={ Header }>
                        </PrivateRoute>
                        <Route path="/login" component={ LoginPage } />
                        <PrivateRoute path="/products/:query">
                            <Products/>
                        </PrivateRoute>
                    </Switch>
                </div>
            </Router>
            </div>
        )
    }
}
export default Main;