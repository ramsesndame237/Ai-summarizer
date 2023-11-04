import config from "../../config/config.ts";

class BaseService {
    static getHeaders = (isRapid:boolean) => {
        const headers = new Headers()
        console.log({isRapid})
        if(isRapid){
            headers.append('X-RapidAPI-Key', config.rapid_key ?? '')
            headers.append('X-RapidAPI-Host', config.rapid_host ?? '')
        }
        headers.append('Accept', 'application/json')
        headers.append('Access-Control-Allow-origin', '*')
        headers.append('Origin', '*')
        headers.append('Credentials', 'same-origin')
        const lang:string = 'en'
        headers.append('Accept-Language', lang)
        return headers

    }

    static postRequest = async (
        url: string,
        body: object,
        required_auth: boolean
    ) => {
        const head =  BaseService.getHeaders(required_auth);

        const headers: RequestInit = {
            method: 'POST',
            headers: head,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body)
        };

        const response = await fetch(url, headers)
            .then((response: unknown) => {
                return response;
            })
            .catch((err: unknown) => {
                return err;
            });
        return response;
    };

    static postFileRequest = async (
        url: string,
        body: FormData,
        required_auth: boolean
    ) => {
        const head = BaseService.getHeaders(required_auth);

        const headers: RequestInit = {
            method: 'POST',
            headers: head,
            mode: 'cors',
            cache: 'default',
            body: body
        };
        const response= await fetch(url, headers)
            .then((response: unknown) => {
                return response;
            })
            .catch((err: unknown) => {
                return err;
            });
        return response;
    };

    static putFileRequest = async (
        url: string,
        body: FormData,
        required_auth: boolean
    ) => {
        const head = BaseService.getHeaders(required_auth);

        const headers: RequestInit = {
            method: 'PUT',
            headers: head,
            mode: 'cors',
            cache: 'default',
            body: body
        };
        const response= await fetch(url, headers)
            .then((response: unknown) => {
                return response;
            })
            .catch((err: unknown) => {
                return err;
            });
        return response;
    };

    static putRequest = async (
        url: string,
        body: object,
        required_auth: boolean
    ) => {
        const head = BaseService.getHeaders(required_auth);

        const headers: RequestInit = {
            method: 'PUT',
            headers: head,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body)
        };
        const response= await fetch(url, headers)
            .then((response: unknown) => {
                return response;
            })
            .catch((err: unknown) => {
                return err;
            });
        return response;
    };

    static patchRequest = async (
        url: string,
        body: object,
        required_auth: boolean
    ) => {
        const head =BaseService.getHeaders(required_auth);

        const headers: RequestInit = {
            method: 'PATCH',
            headers: head,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body)
        };
        const response= await fetch(url, headers)
            .then((response: unknown) => {
                return response;
            })
            .catch((err: unknown) => {
                return err;
            });
        return response;
    };

    static deleteRequest = async (
        url: string,
        body: object,
        required_auth: boolean
    ) => {
        const head = BaseService.getHeaders(required_auth);

        const headers: RequestInit = {
            method: 'DELETE',
            headers: head,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body)
        };
        const response= await fetch(url, headers)
            .then((response: unknown) => {
                return response;
            })
            .catch((err: unknown) => {
                return err;
            });
        return response;
    };

    static getRequest = async (url: string, required_auth: boolean) => {
        const head = BaseService.getHeaders(required_auth);

        const headers: RequestInit = {
            method: 'GET',
            headers: head,
            mode: 'cors',
            cache: 'default'
        };
        const response= await fetch(url, headers)
            .then((response: unknown) => {
                return response;
            })
            .catch((err: unknown) => {
                return err;
            });
        return response;
    };
}

export interface requestInterface {
    url?: string,
    body?: object,
    required_auth?: boolean

}

export default BaseService