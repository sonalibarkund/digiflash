import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: 'token d373a9395bb87c211af4928287b9b1d07d15b619'
  }
});