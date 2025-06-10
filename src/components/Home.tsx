import About from "./About"
import { Contact } from "./Contact"
import { Hero } from "./Hero"
import { Projects } from "./Projects"

export const Home = () => {

    return (
        <div>
        <Hero />
        <About />
        <Projects />
        <Contact/>
        </div>
    )
}