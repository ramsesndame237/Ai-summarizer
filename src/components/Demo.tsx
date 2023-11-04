import asset from '../assets'
import {useState} from "react";

interface Article {
    url: string,
    summary: string
}

const Demo = () => {
    const [article, setArticle] = useState<Article>({
        url: '',
        summary: ''
    })
    const handleSubmit = async (e:unknown) =>{
        console.log(e)
        alert("submit")
    }
    return (
        <section className="w-full mt-16 max-w-xl">
            <div className="flex flex-col w-full gap-2">
                <form onSubmit={handleSubmit} className="relative felx justify-center items-center">
                    <img src={asset.linkIcon} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5"/>
                    <input type="url" placeholder="Enter a URL" onChange={(e) => setArticle({...article,url:e.target.value})} value={article.url} required className="url_input peer"/>
                    <button type="submit" className="submit_btn peer-focus:boder-gray-700 peer-focus:text-gray-700">
                        ⏎
                    </button>
                </form>

            </div>
        </section>
    )
}

export default Demo