import {useEffect, useState} from 'react';
import AnimatedBackground from '../../Components/AnimatedBackground/AnimatedBackground.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import { Link } from 'react-router-dom';
import './Home.scss';
import Constants from "../../Constants/Constants.jsx";

const Home = () => {
    const [showText, setShowText] = useState(false);

    // Simula el efecto de máquina de escribir
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const fullText = `
    Soy un apasionado Desarrollador Web con un trasfondo único. Comencé mi carrera en diseño de
    indumentaria y pasé una década en gastronomía antes de sumergirme en el emocionante mundo del
    desarrollo web en busca de crecimiento personal y profesional.

    En los últimos años, he acumulado experiencia valiosa trabajando en empresas tecnológicas
    líderes, abordando desafíos en JavaScript, GO, Java y más.

    Mi enfoque proactivo y amor por el aprendizaje continuo me impulsa a crecer constantemente.
    Mi experiencia en gastronomía fortaleció mis habilidades de trabajo en equipo y gestión del
    tiempo, mientras que el diseño fomentó la creatividad y atención al detalle.

    Busco un equipo innovador que valore la mejora continua y ofrezca oportunidades emocionantes
    para combinar mis habilidades y seguir creciendo, a la vez que contribuyo con mi experiencia y
    entusiasmo para alcanzar los objetivos de la empresa.
  `;

    return (
        <>
            <AnimatedBackground>
                <hr className='divSkills__divider' />
                <div className='divHome'>
                    <div className='divHome__card'>
                        <p className={`divHome__animated-text ${showText ? 'show' : ''}`}>{fullText}</p>
                    </div>
                    <br />
                    <Link to='/contact' className='divHome__link'>
                        <b>Conéctate conmigo!</b>
                    </Link>
                    <br />
                    <Link
                        to={Constants.curriculumPDF}

                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <button className='divHome__button'>Curriculum PDF</button>
                    </Link>
                </div>
                <Footer />
            </AnimatedBackground>
        </>
    );
};

export default Home;
