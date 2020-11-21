import axios from 'axios';
import {INIT_USER ,LOGIN_USER,REGISTER_USER,AUTH_USER, LOGOUT_USER} from './types';
import { USER_SERVER } from '../_actions/config';

export const initUser=()=>{
   
    const request = axios.get(`${USER_SERVER}/auth/rand-token`)
    .then(response => response.data.data)

    return{
        type: INIT_USER,
        payload: request
    }
}


export const loginUser=(dataToSubmit,config)=>{
   
    const request = axios.post(`${USER_SERVER}/auth/login`,dataToSubmit,config)
    .then(response => response.data)

    return{
        type: LOGIN_USER,
        payload: request
    }
}

export const registerUser=(dataToSubmit,config)=>{
   
    const request = axios.post(`${USER_SERVER}/auth/signup`,dataToSubmit,config)
    .then(response => response.data)

    return{
        type: REGISTER_USER,
        payload: request
    }
}


export const auth=()=>{
   
    const request = axios.get(`${USER_SERVER}/auth`)
    .then(response => response.data)

    return{
        type: AUTH_USER,
        payload: request
    }
}

export const logoutUser=()=>{
    const request = axios.get(`${USER_SERVER}/logout`)
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}