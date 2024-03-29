import Slider from 'react-slick';
import {Card} from '../Card/Card.jsx';
import MockUp from '../../Constants/ProjectsFiles.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.scss';

const PrevArrow = (props) => (
    // eslint-disable-next-line react/prop-types
    <div className='custom-slick-prev' onClick={props.onClick}>
        <i className='fa-solid fa-arrow-left'></i>
    </div>
);

const NextArrow = (props) => (
    // eslint-disable-next-line react/prop-types
    <div className='custom-slick-next' onClick={props.onClick}>
        <i className='fa-solid fa-arrow-right'></i>
    </div>
);

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slides',
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        centerMode: true,
        adaptiveHeight: false,
        arrows: true,
        /*autoplay: true,*/
    }

    return (
        <div className='carousel'>
            <Slider {...settings} >
                {MockUp?.map(project => {
                    return(
                        <div key={project.id}>
                            <Card project={project}/>
                        </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default Carousel
