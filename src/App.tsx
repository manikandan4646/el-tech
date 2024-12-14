import AboutUs from "./components/AboutUs"
import Header from "./components/Header"
import KeyPoints from "./components/KeyPoints"
import OurApproach from "./components/OurApproach"
import OurServices from "./components/OurServices"
import Projects from "./components/Projects"
import Slider from "./components/Slider"
import WeProvide from "./components/WeProvide"

function App() {
    return (
        <div>
            <Header />
            <div className="mt-[73px] sm:mt-[91px]">
                <section id="home" className="h-[calc(100vh-73px)] sm:h-[calc(100vh-91px)]">
                    <Slider />
                </section>
                <section id="services">
                    <OurServices />
                </section>
                <section id="about_us">
                    <AboutUs />
                    <OurApproach />
                    <KeyPoints />
                    <WeProvide />
                </section>
                <section id="projects">
                    {/* <Projects /> */}
                </section>
                <section id="contact" className="h-[calc(100vh-73px)] sm:h-[calc(100vh-91px)]">
                    <h1>Contact section</h1>
                </section>
            </div>
        </div>
    )
}

export default App
