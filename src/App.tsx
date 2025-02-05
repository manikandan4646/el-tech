import { useEffect } from "react"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Header from "./components/Header"
import KeyPoints from "./components/KeyPoints"
import OurApproach from "./components/OurApproach"
import OurServices from "./components/OurServices"
import Projects from "./components/Projects"
import Slider from "./components/Slider"
import WeProvide from "./components/WeProvide"
import Aos from "aos"
import ContactPopup from "./components/ContactPopup"

function App() {

    useEffect(() => {
        Aos.init({
            duration: 800,
            offset: 50, // Trigger animations earlier (default is 120px)
            once: false,
            easing: "ease-in-out",
        });
    }, []);
    return (
        <div className="bg-white">
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
                    <Projects />
                </section>
                <section>
                    <ContactUs />
                </section>
            </div>
            <Footer />
            {/* <ContactPopup /> */}
        </div>
    )
}

export default App
