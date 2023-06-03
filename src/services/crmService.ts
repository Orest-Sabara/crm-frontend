import {apiService} from "./apiService";
import {urls} from "../configs";

const crmService = {
    getAll:() => apiService.get(urls.crm.crm),
    create: (data: any) => apiService.post(urls.crm.crm, data),
    updateById: (id: string, data: any) => apiService.put(urls.crm.byId(id), data),
    deleteById: (id: string) => apiService.delete(urls.crm.byId(id)),
}

export {
    crmService
}