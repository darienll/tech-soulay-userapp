import { userConstants } from '../../constants';
import { userService } from '../../services';
import { alertActions } from './';
import { history } from '../../helpers';
import { message, Button, Space } from 'antd';

export const userActions = {
    login,
    register,
    logout,
    getAll
};

function login(username, password) {
    return dispatch => {
        // dispatch(request({ username }));
        // localStorage.setItem('user', JSON.stringify('test'));
        // history.push('/')
        // return dispatch(success("test"));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    history.push('/login')
    return { type: userConstants.LOGOUT };
}

function register(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.register(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    message.success('You have sucessfully registered');
                    history.push('/login');
                },
                error => {
                    dispatch(failure(error));
                    message.error('Some error occured');
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}