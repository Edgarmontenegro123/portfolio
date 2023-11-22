import React from "react";
import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import SkillsItems from "../../Constants/SkillsItems.jsx";
import './Skills.scss'

const listItems = SkillsItems?.map(item =>
    <React.Fragment key={item.id}>
        <li>
            <div className='column-content'>
                {item.icon} {item.name}
            </div>
        </li>
    </React.Fragment>
)

const Skills = () => {
    return(
        <>
            <AnimatedBackground>
                <div className='divSkills'>
                    <h1>My Skills!</h1>
                    <hr className='title__divider' />
                    <ul className='divSkills__list'>{listItems}</ul>
                </div>
                <Footer/>
            </AnimatedBackground>
        </>
    )
}
export default Skills