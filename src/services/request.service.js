'use strict';
import axios from 'axios';
import { URL } from '../constants';


export const REQUEST_TYPES = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
};



let logInToken, refreshToken;


function handleRequest(route, req_type, body, needsAuth, okfunc, errfunc) {
    const config = {};
    if (needsAuth) config.headers = { 'Authorization': logInToken };

    let promise;

    switch (req_type) {
        case REQUEST_TYPES.GET:
            promise = axios.get(route, config);
            break;
        case REQUEST_TYPES.POST:
            promise = axios.post(route, body, config);
            break;
        case REQUEST_TYPES.PUT:
            promise = axios.get(route, body, config);
            break;
    }
    console.log(body);
    promise.then(okfunc).catch(err => {
        if (!needsAuth || err.response.data !== 'Death token') errfunc(err);
        else refresh(() => {

        }, errfunc);
    });

}

function refresh(ok_func, err_func) {
    const config = { headers: { 'Authorization': logInToken } };
    axios.get(URL + '/service/refresh_log_in_token', config).then((response) => {
        logInToken = response.data;
        ok_func();
    }).catch(err_func);
}

export const logIn = function(email, password, ok_func, err_func) {
    handleRequest(URL + '/user/log_in', REQUEST_TYPES.POST, { email, password }, false, (response) => {
        logInToken = response.data.log_in_token;
        refreshToken = response.data.refresh_token;
        ok_func();
    }, err_func);
};