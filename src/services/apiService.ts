import axios, {AxiosInstance} from "axios";

import {baseURL} from "../configs";

const apiService: AxiosInstance = axios.create({baseURL});

export {
    apiService
}