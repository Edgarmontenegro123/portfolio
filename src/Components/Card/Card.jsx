import {useState} from 'react'
import {Link} from 'react-router-dom';
import './Card.scss'

// eslint-disable-next-line react/prop-types,no-unused-vars
const AccordionItem = ({ video, content, tech, deploy, gitHub }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toogleAccordion = () => {
        setIsExpanded(!isExpanded)
    }

    return(
        <div className={`accordion ${isExpanded ? 'accordion__expanded' : ''}`}>
            <div className='accordion__header' onClick={toogleAccordion}>
                <Link to={video}
                      target='_blank' rel='noreferrer'
                      className='accordion__play'>
                    <i className='fa-solid fa-play' id='play'></i>
                </Link>
                <span>{isExpanded? <i className='fa-solid fa-angles-up' id='up'></i> :
                    <i className='fa-solid fa-angles-down' id='down'></i>}
                </span>
            </div>
            {isExpanded && <div className='accordion__content'>
                {content}
                <div className='accordion__techs'>
                    <span>Para realizarla se utilizaron tecnologías como:</span>
                    <span className='accordion__tech'><b>{tech}</b></span>
                </div>
                <div className='accordion__deploy'>
                    <span className='accordion__deploySpan'>Pruéba la
                        <Link to={deploy} target='_blank' rel='noreferrer'
                                        className='accordion__deployLink'> App acá!</Link>
                    </span>

                    <span className='accordion__deploySpan'>Observa el
                        <Link to={gitHub} target='_blank' rel='noreferrer'
                                         className='accordion__deployLink'> Código acá!</Link>
                    </span>

                </div>
            </div>}
        </div>
    )
}

// eslint-disable-next-line react/prop-types
const Card = ({project}) => {
    return(
        <div className='projectCard'>
            {/* eslint-disable-next-line react/prop-types */}
            <div  key={project.id}  className='projectCard__header'>
                {/* eslint-disable-next-line react/prop-types */}
                <img src={project.avatar} alt={project.title} className='projectCard__img' />
                <div className='projectCard__item'>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span className='projectCard__title'><b>{project.title}</b></span>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span className='projectCard__date'>{project.date}</span>
                </div>
            </div>
            <div className='projectCard__gif'>
                {/* eslint-disable-next-line react/prop-types */}
                <img src={project.img} alt={project.title} className='projectCard__image'/>
            </div>
            <div className='projectCard__accordionItem'>
                {/* eslint-disable-next-line react/prop-types */}
                <AccordionItem video={project.video} content={project.description}
                               /* eslint-disable-next-line react/prop-types */
                               tech={project.tech} deploy={project.deploy} gitHub={project.gitHub}/>
            </div>
        </div>
    )
}

export  {
    Card, AccordionItem
}