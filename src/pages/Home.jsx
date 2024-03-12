import About from "../component/About";
import Contact from "../component/Contact";
import Experience from "../component/Experience";
import Header from "../component/Header";
import Projects from "../component/Projects";

const Home = () => {
    return (
        <> 
            <Header />
            <Experience />
            <About />
            <Projects />
            <div className="bottom_set py-20 sm:pt-4 xl:py-20 bg-center bg-no-repeat hidden sm:block"></div>
            <Contact />
        </>
    )
}

export default Home