import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground.jsx";
import Carousel from "../../Components/Carousel/Carousel.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import './Projects.scss';

const Projects = () => {
    return(
        <>
            <AnimatedBackground>
                <hr className='divSkills__divider'/>
                <div className='divProjects'>
                    <h1>Vista Projects!</h1>
                    <Carousel/>
                </div>
                <Footer/>
            </AnimatedBackground>
        </>
    )
}
export default Projects