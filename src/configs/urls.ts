// @ts-ignore
const baseURL:string = 'http://owu.linkpc.net/carsAPI/v2';

const crm:string = '/crm';
const auth:string = '/auth'

const urls = {
    auth: {
        login: auth,
        refresh: `${auth}/refresh`,
        me: `${auth}/me`
    },
    crm: {
       crm: crm,
       byId: (id:string) => `${crm}/${id}`
    }
}

export {
    baseURL,
    urls
}