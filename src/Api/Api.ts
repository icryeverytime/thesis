import axios from "axios";
//http://192.168.0.9:9005/api/general/getall
const protocol = 'http'
const domainName = 'localhost';//127.0.0.1 es el localhost cambiarlo a ipv4
const port = '3001';

export const Api = axios.create({
    baseURL: `${protocol}://${domainName}:${port}`,
});

