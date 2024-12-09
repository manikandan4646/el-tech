import Header from "./components/Header"
import OurServices from "./components/OurServices"
import Slider from "./components/Slider"

function App() {
    return (
        <div>
            <Header />
            <div className="mt-[73px] sm:mt-[91px]">
                <div id="home" className="h-[calc(100vh-73px)] sm:h-[calc(100vh-91px)]">
                    <Slider />
                </div>
                <div id="services" className="">
                    <OurServices />
                </div>
                <div id="about_us" className="h-[calc(100vh-73px)] sm:h-[calc(100vh-91px)]">
                    <h1>About div</h1>
                </div>
                <div id="projects" className="h-[calc(100vh-73px)] sm:h-[calc(100vh-91px)]">
                    <h1>Projects div</h1>
                </div>
                <div id="contact" className="h-[calc(100vh-73px)] sm:h-[calc(100vh-91px)]">
                    <h1>Contact div</h1>
                </div>
            </div>
        </div>
    )
}

export default App
