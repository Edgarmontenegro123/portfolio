import {useState} from 'react';
import './Card.scss'

// eslint-disable-next-line react/prop-types,no-unused-vars
const AccordionItem = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toogleAccordion = () => {
        setIsExpanded(!isExpanded)
    }

    return(
        <div className='accordion'>
            <div className='accordion__header' onClick={toogleAccordion}>
                <h3>{title}</h3>
                <span>{isExpanded? <i className='fa-solid fa-angles-up'></i> : <i className='fa-solid fa-angles-down'></i>}</span>
            </div>
            {isExpanded && <div className='accordion__content'>{content}</div>}
        </div>
    )
}

const Card = () => {
    return(
        <div className='projectCard'>
            <div className='projectCard__header'>
                <img src={'Logo'} alt='Image'/>
                <h1>Title</h1>
                <h2>Date</h2>
            </div>
            <div className='projectCard__accordion'>
                <AccordionItem title='Item 1' content='Content 1'/>
            </div>
        </div>
    )
}

export  {
    Card, AccordionItem
}