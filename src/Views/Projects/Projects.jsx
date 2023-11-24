import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import './Projects.scss'

const Projects = () => {
    return(
        <>
            <AnimatedBackground>
                <hr className='divSkills__divider'/>
                <div className='divProjects'>
                    <h1>Vista Projects!</h1>
                    <span>Crear carrusel con tarjetas animado (puede ser el fondo de las tarjetas también!)</span>
                </div>
                <Footer/>
            </AnimatedBackground>
        </>
    )
}
export default Projects