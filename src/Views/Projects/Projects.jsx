import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground.jsx";
import Carousel from "../../Components/Carousel/Carousel.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import './Projects.scss';

const Projects = () => {
    return(
        <>
            <AnimatedBackground className='animatedBackground'>
                <hr className='divSkills__divider'/>
                <div className='divProjects'>
                    <Carousel/>
                </div>
                <Footer/>
            </AnimatedBackground>
        </>
    )
}
export default Projects