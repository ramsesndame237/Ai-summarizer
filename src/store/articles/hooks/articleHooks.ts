import {useMutation, useQuery} from "@tanstack/react-query";
import BaseService from "../../../services/api/BaseService.ts";
import {ArticleUrls} from "../../../services/api/urls.ts";

export const article_store_key = (uuid: string) => ['article_key', uuid]


export const useHooksArticle = (setLoading: (loading: boolean) => void) => {

    return useMutation({
        mutationFn: async (urlParams: string) => {
            setLoading(true)
            let data: any;
            try {
                const response = await BaseService.getRequest(ArticleUrls.GET_ARTICLE_SUMARIZE(urlParams, "3"), true)

                data = await response.json()

                if ([200, 201].includes(response.status)) {
                    return data
                }
            } catch (e) {
                console.error(e)
                setLoading(false)
            }
        },
        onSuccess: () => {
            setLoading(false)
        },
        onError:(error)=>{
            setLoading(true)
            return error
        },
        onSettled:(data,error)=>{
            setLoading(false)
            return {data, error}
        }
    })
}