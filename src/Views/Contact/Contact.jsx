import AnimatedBackground from '../../Components/AnimatedBackground/AnimatedBackground.jsx';
import Footer from "../../Components/Footer/Footer.jsx";
import Constants from '../../Constants/Constants.jsx';
import {Link} from 'react-router-dom';
import './Contact.scss'

const Contact = () => {
    return(
        <>
            <AnimatedBackground>
                <hr className='divSkills__divider'/>
                <div className='divContact'>
                    <div className='divContact__info'>
                        <Link to={Constants.whatsapp}
                              target='_blank' rel='noreferrer'
                              className='divContact__link'>
                                <span>
                                    <i className='fa-brands fa-whatsapp'></i>
                                    <span className='divContact__span'> Teléfono: </span>{Constants.phone}
                                </span>
                        </Link>
                            <br/>
                        <Link to={Constants.mailRedirect}
                              target='_blank' rel='noreferrer'
                              className='divContact__link'>
                            <span>
                                <i className='fa-regular fa-envelope' />
                                <span className='divContact__span'> Correo Electrónico: </span>
                                {Constants.email}
                            </span>
                        </Link>
                            <br/>
                        <Link to={Constants.linkedIn}
                              target='_blank' rel='noreferrer'
                              className='divContact__link'>
                            <span>
                                <i className='fa-brands fa-linkedin'></i>
                                <span className='divContact__span'> LinkedIn: </span>{Constants.perfilLinkedIn}
                            </span>
                        </Link>
                        <br/>
                        <Link to={Constants.github}
                              target='_blank' rel='noreferrer'
                              className='divContact__link'>
                            <span>
                                <i className='fa-brands fa-github'></i>
                                <span className='divContact__span'> Github: </span>{Constants.perfilGithub}
                            </span>
                        </Link>
                        <br/>
                        <Link to={Constants.twitter}
                              target='_blank' rel='noreferrer'
                              className='divContact__link'>
                            <span>
                                <i className='fa-brands fa-x-twitter'></i>
                                <span className='divContact__span'> X: </span>{Constants.perfilTwitter}
                            </span>
                        </Link>
                        <br/>
                        <Link to={Constants.curriculumPDF}
                              target='_blank' rel='noreferrer'
                              className='divContact__link'>
                            <span>
                                <i className="fa-solid fa-file-pdf"></i>
                                <span className='divContact__span'>Mi Curriculum en PDF</span>
                            </span>
                        </Link>
                        <br/>
                        <Link to={Constants.home}
                              target='_blank' rel='noreferrer'
                              className='divContact__link'>
                            <span>
                                <i className='fa-solid fa-globe'></i>
                                <span className='divContact__span'>Lugar de Residencia: </span>Buenos Aires, Argentina
                            </span>
                        </Link>
                    </div>
                </div>
                <Footer/>
            </AnimatedBackground>
        </>
    )
}
export default Contact