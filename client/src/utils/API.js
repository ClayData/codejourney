import axios from 'axios';

class API {
    saveUser(userData) {
        return axios.post('http://172.31.36.136:8011/users-ws/users', userData);
    }

    getUser(userData) {
        return axios.post('http://172.31.36.136:8011/users-ws/users/login', userData);
    }

    addTomato(tomatoData) {
        console.log("sending a tomater...");
        console.log(tomatoData);
        return axios.post('http://172.31.36.136:8011/tomato-ws/tomato', tomatoData);
    }

    getTomatoes(userData) {
        return axios.get(`http://172.31.36.136:8011/tomato-ws/tomato/${userData}`);
    }
}

export default new API();
