import config from "../../config/config.ts";

const prefixer = config.api_url

export const ArticleUrls = {
    GET_ARTICLE_SUMARIZE: (url: string) => `${prefixer}summarize?url=${url}`
}