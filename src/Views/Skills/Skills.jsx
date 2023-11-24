import React from "react";
import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import SkillsItems from "../../Constants/SkillsItems.jsx";
import './Skills.scss'

const listItems = SkillsItems?.map((item, index) =>
    <React.Fragment key={item.id}>
        <li className='fadeInUp' style={{animationDelay: `${index * 0.3}s`}}>
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
                    <hr className='divSkills__divider'/>
                    <h2 className='divSkills__title'>Creo en construir experiencias significativas para los usuarios a través de interfaces intuitivas
                        y elegantes!</h2>
                    <hr className='divSkills__divider'/>
                    <ul className='divSkills__list'>{listItems}</ul>
                </div>
                <Footer/>
            </AnimatedBackground>
        </>
    )
}
export default Skills