import {useState} from 'react'
import './Card.scss'

// eslint-disable-next-line react/prop-types,no-unused-vars
const AccordionItem = ({ video, content }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toogleAccordion = () => {
        setIsExpanded(!isExpanded)
    }

    return(
        <div className='accordion'>
            <div className='accordion__header' onClick={toogleAccordion}>
                <button className='accordion__play'>
                    <i className='fa-solid fa-play' id='play'></i>
                </button>
                <span>{isExpanded? <i className='fa-solid fa-angles-up' id='up'></i> :
                    <i className='fa-solid fa-angles-down' id='down'></i>}
                </span>
            </div>
            {isExpanded && <div className='accordion__content'>{content}</div>}
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
                <AccordionItem video={project.video} content={project.description}/>
            </div>
        </div>
    )
}

export  {
    Card, AccordionItem
}