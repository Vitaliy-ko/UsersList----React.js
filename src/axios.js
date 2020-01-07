import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://yalantis-react-school.herokuapp.com/api/task0/'
});

export default instance;