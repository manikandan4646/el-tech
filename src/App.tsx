import Header from "./components/Header"

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="home" className="h-screen flex items-center justify-center bg-gray-100">
                    <h1>Home Section</h1>
                </section>
                <section id="about_us" className="h-screen flex items-center justify-center bg-gray-200">
                    <h1>About Section</h1>
                </section>
                <section id="services" className="h-screen flex items-center justify-center bg-gray-300">
                    <h1>Services Section</h1>
                </section>
                <section id="projects" className="h-screen flex items-center justify-center bg-gray-400">
                    <h1>Projects Section</h1>
                </section>
                <section id="contact" className="h-screen flex items-center justify-center bg-gray-400">
                    <h1>Contact Section</h1>
                </section>
            </main>
        </div>
    )
}

export default App
