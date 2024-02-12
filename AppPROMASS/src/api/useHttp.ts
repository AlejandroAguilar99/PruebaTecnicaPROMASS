import axios from 'axios';

export const useHttp = () => {

    const baseURL = "http://pruebasapp.alwaysdata.net";

    const headers = "/controllers";

    const api = axios.create({
        baseURL: `${baseURL}${headers}`,
        headers:{
            'Content-Type': 'application/json',
        }
    });

    return {
        api,
        headers
    }
}