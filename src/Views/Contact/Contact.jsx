import AnimatedBackground from '../../Components/AnimatedBackground/AnimatedBackground.jsx';
import {Link} from 'react-router-dom';

import './Contact.scss'

const Contact = () => {
    return(
        <>
            <AnimatedBackground>
                <div className='divContact'>
                    <div className='divContact__info'>
                        <Link to='https://wa.link/8x2m0y'
                              target='_blank' rel='noreferrer'
                              className='divContact__link'>
                                <span>
                                    <i className='fa-brands fa-whatsapp'></i>
                                    <span className='divContact__span'> Teléfono: </span>+54 911 6210 1137
                                </span>
                        </Link>
                            <br/>
                        <Link to='mailto:edgarmontenegro321@gmail.com'
                              target='_blank' rel='noreferrer'
                              className='divContact__link'>
                            <span>
                                <i className='fa-regular fa-envelope' />
                                <span className='divContact__span'> Correo Electrónico: </span>
                                edgarmontenegro321@gmail.com
                            </span>
                        </Link>
                            <br/>
                        <Link to='https://www.linkedin.com/in/edgarmontenegro/'
                              target='_blank' rel='noreferrer'
                              className='divContact__link'>
                            <span>
                                <i className='fa-brands fa-linkedin'></i>
                                <span className='divContact__span'> LinkedIn: </span>edgarmontenegro
                            </span>
                        </Link>
                        <br/>
                        <Link to='https://github.com/Edgarmontenegro123'
                              target='_blank' rel='noreferrer'
                              className='divContact__link'>
                            <span>
                                <i className='fa-brands fa-github'></i>
                                <span className='divContact__span'> Github: </span>Edgarmontenegro123
                            </span>
                        </Link>
                        <br/>
                        <Link to='https://twitter.com/MontenegroCode'
                              target='_blank' rel='noreferrer'
                              className='divContact__link'>
                            <span>
                                <i className='fa-brands fa-x-twitter'></i>
                                <span className='divContact__span'> X: </span>MontenegroCode
                            </span>
                        </Link>
                        <br/>
                        <Link to=''
                              target='_blank' rel='noreferrer'
                              className='divContact__link'>
                            <span>
                                <i className='fa-solid fa-globe'></i>
                                <span className='divContact__span'>Lugar de Residencia: </span>Buenos Aires, Argentina
                            </span>
                        </Link>
                    </div>
                </div>
            </AnimatedBackground>
        </>
    )
}
export default Contact