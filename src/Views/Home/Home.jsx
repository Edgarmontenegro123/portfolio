import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground.jsx";
import './Home.scss'
import Footer from "../../Components/Footer/Footer.jsx";

const Home = () => {
    return(
        <>
            <AnimatedBackground>
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