import axios from 'axios';

export const get_request = () => {
    axios.interceptors.request.use(req => {
        console.log(`${req.method} ${req.url}`);
        req.headers.authorization = 'my secret token';
        return req;
    });
}

export const post_request = () => {
    axios.interceptors.response.use(
        res => res,
        err => {
            if (err.response.status === 404) {
                throw new Error(`${err.config.url} not found`);
            }
            throw err;
        }
    );
}