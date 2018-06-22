import axios from 'axios/index';
import httpAdapter from 'axios/lib/adapters/http';
import { config } from './factory';

export default (host = config.HOST) => {
    axios.defaults.host = host;
    axios.defaults.adapter = httpAdapter;
};
