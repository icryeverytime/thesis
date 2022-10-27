import axios from "axios";
//http://192.168.0.9:9005/api/general/getall
const protocol = 'http'
const domainName = '192.168.0.9';//127.0.0.1 es el localhost cambiarlo a ipv4
const port = '9005';

export const Api = axios.create({
    baseURL: `${protocol}://${domainName}:${port}/api/general/`,
});

