import LogoQuizUp from '../assets/Images/quizUpLogo.png'
import LogoClimApp from '../assets/Images/sunnyCloud.png'
import LogoHealthier from '../assets/Images/healthier.png'
import LogoYoutube from '../assets/Images/youtubeLogo.png'
import LogoTaskMate from '../assets/Images/tasksLogo.png'
import GifQuizUp from '../assets/Images/gifQuizUp.gif'
import GifTaskMate from '../assets/Images/gifTaskMate.gif'
import GifClimApp from '../assets/Images/gifClimApp.gif'
import GifHealthier from '../assets/Images/gifHealthier.gif'
import GifYoutubeChallenge from '../assets/Images/gifYoutubeChallenge.gif'

const MockUp = [{
    id: 1,
    avatar: LogoQuizUp,
    title: 'QuizUp!',
    date: 'Septiembre 2024',
    img: GifQuizUp,
    resume: 'Juego de trivia que permite a los usuarios responder preguntas, escoger entre diferentes categorías y elegir la dificultad para jugar!',
    video: 'https://vimeo.com/manage/videos/1010081429',
    description: 'Es un juego de trivia que permite a los usuarios responder preguntas, escoger entre muchísimas categorías y elegir la dificultad para jugar!',
    tech: 'TypeScript, React, NextJs, Tailwind, Swiper, ESLint, Prettier, Jest, React Testing Library',
    deploy: 'https://quizup-by-montenegro.vercel.app/',
    gitHub: 'https://github.com/Edgarmontenegro123/quizup'},
    {
    id: 2,
    avatar: LogoTaskMate,
    title: 'Task Mate',
    date: 'Septiembre 2024',
    img: GifTaskMate,
    resume: 'Aplicación basada en el famoso proyecto To-Do List, potenciada con diferentes funcionalidades.',
    video: 'https://vimeo.com/manage/videos/1010457455',
    description: 'Esta es una App con una interfaz amigable, que permite agregar notas o tareas, modificarlas, separarlas por colores, organizarlas con un simple arrastre, eliminar las tareas completadas y guardarlas en tu dispositivo entre otras funcionalidades.',
    tech: 'JavaScript, React, NextJs, Typescript, Tailwind, HTML5, CSS3',
    deploy: 'https://task-mate-by-montenegro.vercel.app/',
    gitHub: 'https://github.com/Edgarmontenegro123/task-mate'},
    {
    id: 3,
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
    id: 4,
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
    id: 5,
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