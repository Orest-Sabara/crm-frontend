import {apiService} from "./apiService";
import {urls} from "../configs";

const authService = {
    login: (cred: any) => apiService.post(urls.auth.login, cred),
    refresh: (refresh: string) => apiService.post(urls.auth.refresh, {refresh}),
    me:() => apiService.get(urls.auth.me)
}

export {authService}