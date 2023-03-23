import axios from 'axios';

window.onload = () => {
axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=6a610d9602624904b441974e2c1c0aed')
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

