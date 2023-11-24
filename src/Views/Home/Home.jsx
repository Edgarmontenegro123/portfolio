import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import './Home.scss'

const Home = () => {
    return(
        <>
            <AnimatedBackground>
                <hr className='divSkills__divider'/>
                <div className='divHome'>
                    <h1>Vista Home!</h1>
                    <p>lorem ipsum</p>
                </div>
                <Footer/>
            </AnimatedBackground>
        </>
    )
}
export default Home