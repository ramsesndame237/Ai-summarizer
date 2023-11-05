import asset from '../assets'
import {useEffect, useState} from "react";
import {useHooksArticle} from "../store/articles/hooks/articleHooks.ts";

export interface ArticleSummary {
    url: string,
    summary: string
}

const Demo = () => {
    const [article, setArticle] = useState<ArticleSummary>({
        url: '',
        summary: ''
    })
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | undefined>(undefined)
    const useArticleSummariseMutation = useHooksArticle(setLoading)
    const [copy,setCopy]=useState('')
    const [allArticles, setAllArticles] = useState<ArticleSummary[]>([])
    useEffect(() => {
        const articlesJSON = localStorage.getItem('articles')
        console.log("this is the json ", {articlesJSON})
        if (articlesJSON) {
            const articlesFromLocalStorage = JSON.parse(articlesJSON ?? '')
            if (articlesFromLocalStorage) {
                setAllArticles(articlesFromLocalStorage)
            }
        } else {
            localStorage.setItem('articles', JSON.stringify([]))
        }
    }, [])
    const handleCopy = (url:string)=>{
        setCopy(url)
        navigator.clipboard.writeText(url).then(()=>{
            console.log(url)
        })
        setTimeout(() => setCopy(''),3000)

    }
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        useArticleSummariseMutation.mutate(article.url ?? '', {
                onSuccess: (data?: ArticleSummary) => {
                    console.log("this is the server data", {data})
                    if (data?.summary) {
                        const newArticle = {...article, summary: data.summary}
                        const updateAllArticles = [newArticle, ...allArticles]
                        setArticle(newArticle)
                        setAllArticles(updateAllArticles)
                        localStorage.setItem('articles', JSON.stringify(updateAllArticles))
                    }
                },
                onError: (error) => {
                    setError(error)
                }

            }
        )
    }
    return (
        <section className="w-full mt-16 max-w-xl">
            <div className="flex flex-col w-full gap-2">
                <form onSubmit={handleSubmit} className="relative felx justify-center items-center">
                    <img src={asset.linkIcon} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5"/>
                    <input type="url" placeholder="Enter a URL"
                           onChange={(e) => setArticle({...article, url: e.target.value})} value={article.url} required
                           className="url_input peer"/>
                    <button type="submit" className="submit_btn peer-focus:boder-gray-700 peer-focus:text-gray-700">
                        ⏎
                    </button>
                </form>
                <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
                    {
                        allArticles.map((article, index) => (
                            <div
                                key={`link-${index}`}
                                onClick={() => setArticle(article)}
                                className="link_card"
                            >
                                <div className="copy_btn" onClick={()=>handleCopy(article.url)}>
                                    <img src={copy === '' ?  asset.copy : asset.tick} alt="copy_icon" className="w-[40%] h-[40%] object-contain"/>
                                </div>
                                <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                                    {article.url}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="my-10 max-w-full flex justify-center items-center">
                {
                    loading ? (
                        <img src={asset.loader} alt="loader_icon" className="w-20 h-20 object-contain"/>) : error ? (
                        <p className="font-inter font-bold text-black tex-center">
                            Well, that wasn't supposed to happen....
                            <br/>
                            <span className="font-satoshi font-normal text-gray-700">
                                {error.message}
                            </span>
                        </p>) : (article.summary ? (<div className="flex flex-col gap-3">
                        <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                            Article <span className="blue_gradient">
                            Summary
                        </span>
                        </h2>
                        <div className="summary_box">
                            <p className="font-inter font-medium test-sm text-gray-700">
                                {article.summary}
                            </p>
                        </div>
                    </div>) : null)
                }

            </div>
        </section>
    )
}

export default Demo