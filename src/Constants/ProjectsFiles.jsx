import LogoClimApp from '../assets/Images/sunnyCloud.png'
import LogoHealthier from '../assets/Images/healthier.png'
import LogoYoutube from '../assets/Images/youtubeLogo.png'
import GifClimApp from '../assets/Images/gifClimApp.gif'
import GifHealthier from '../assets/Images/gifHealthier.gif'
import GifYoutubeChallenge from '../assets/Images/gifYoutubeChallenge.gif'

const MockUp = [{
    id: 1,
    avatar: LogoClimApp,
    title: 'ClimApp',
    date: 'Marzo 2021',
    img: GifClimApp,
    resume: 'Primera App FrontEnd realizada con React y una API externa.',
    video: 'https://vimeo.com/manage/videos/586698718',
    description: 'Esta es una App con una interfaz amigable, que muestra la hora y la fecha detallada del lugar donde te encuentres, con un buscador intuitivo, para que elijas tus ciudades favoritas y en ellas puedas observar los datos climáticos más relevantes.',
    tech: 'JavaScript, React, Material UI, HTML5, CSS3',
    deploy: 'https://climappmontenegro.vercel.app',
    gitHub: 'https://github.com/Edgarmontenegro123/ClimApp'},
    {
    id: 2,
    avatar: LogoHealthier,
    title: 'Healthier',
    date: 'Agosto 2021',
    img: GifHealthier,
    resume: 'E-Commerce realizado de manera grupal como proyecto final para Soy Henry Bootcamp.',
    video: 'https://vimeo.com/manage/videos/586633960',
    description: 'Con una interfaz muy intuitiva, que permite comprar productos saludables, ordenarlos por precio, por categoría, incluirlos en una wishlist  o llevarlos a un carrito de compra donde se permite terminar el proceso de compra mediante una pasarela de pagos.',
    tech: 'React, Redux, Material UI, NodeJS, PostgreSQL',
    deploy: 'https://Healthier.vercel.app',
    gitHub: 'https://github.com/Healthier-Group/Healthier'},
    {
    id: 3,
    avatar: LogoYoutube,
    title: 'Youtube-Challenge',
    date: 'Noviembre 2023',
    img: GifYoutubeChallenge,
    resume: 'App FrontEnd realizada con React y la API de Youtube.',
    video: 'https://vimeo.com/manage/videos/586698718',
    description: 'Esta es una App con una interfaz amigable, que permite ingresar una URL de Youtube en un buscador intuitivo, que trae el título del video, la cantidad de views y sus comentarios.',
    tech: 'JavaScript, React, Sass, HTML5, CSS3, Youtube API, Express',
    deploy: 'https://challenge-youtube.vercel.app/',
    gitHub: 'https://github.com/Edgarmontenegro123/challenge-youtube'}]

export default MockUp