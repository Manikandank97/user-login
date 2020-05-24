export const loginUserService = (request) => {
    // const LOGIN_API_ENDPOINT = 'http://localhost:3000/api/v1/login';
    const LOGIN_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/';

    const parameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request.loginData)
    };

    return fetch(LOGIN_API_ENDPOINT, parameters)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log(error);
        })
};

export const registerUserService = (request) => {
    const REGISTER_API_ENDPOINT = 'http://localhost:3000/api/v1/register';

    const parameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request.regData)
    };

    return fetch(REGISTER_API_ENDPOINT, parameters)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log(error);
        })
};
