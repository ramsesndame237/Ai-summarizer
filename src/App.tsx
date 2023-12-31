import './App.css'
import Hero from "./components/Hero.tsx";
import Demo from "./components/Demo.tsx";

const App = () =>{
    return(
        <main>
            <div className="main">
                <div className="gradient"></div>
            </div>
            <div className="app">
                <Hero />
                <Demo/>
            </div>
        </main>
    )
}

export default  App