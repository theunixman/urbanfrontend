import axios from 'axios';
import history from '../history';
import {accessToken, clearState} from './persistState';

const ip = 'http://192.168.1.115/v1/';
const aws ='http://52.15.60.1:3000/v1/';
const local = 'http://localhost:3000/v1/';

const api = axios.create({
    baseURL: aws,
    timeout: 20000,
});

if (accessToken) {
    api.defaults.headers.common['Authorization'] = accessToken();
}

api.interceptors.response.use((response) =>{
    return response;
}, (error)=> {
    if (error.response.status === 401) {
        clearState();
        history.push('/login');
    }

    throw error;
});

/**
 * A helper function to set token after the user in logged in.
 */

 export const setToken = (token) => {
   
     api.defaults.headers.common['Authorization'] = "Bearer "+ token;
 }

 export default api;