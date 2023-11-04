import asset from '../assets'
const Hero = () => {
  return(
     <header className="w-full flex justify-center items-center flex-col">
         <nav className="flex justify-between items-center w-full pt-3 mb-10  ">
             <img src={asset.logo} alt="application-logo" className="w-28 object-contain"/>
             <button type="button" onClick={() =>window.open('https://github.com/ramsesndame237/Ai-summarizer')}  className="black_btn">
                 GitHub
             </button>
         </nav>
         <div className="head_text">
             Summarize Articles with <br className="max-md:hidden"  />
             <span className="orange_gradient">
                 OpenAI GPT-4
             </span>
             <h2 className="desc">
                     Imagine a world where you can read any article in just a few minutes. Where you can stay up-to-date on the latest news and trends without having to spend hours scrolling through social media or reading endless articles
             </h2>
         </div>

     </header>
  )
}
export default Hero