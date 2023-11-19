import { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
//import {$backgroundBlueDark, $backgroundBlueLight} from '../../index.scss';
import './DarkThemeButton.scss';

const DarkThemeButton = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        //const header = document.getElementsByClassName('divHeader')[0]
        const body = document.body

        if(darkMode) {
            body.classList.remove('darkMode')
            body.classList.add('lightMode')
            //header.style.background = '#52B5F2'
        }
        else {
            body.classList.remove('lightMode')
            body.classList.add('darkMode')

            //header.style.background = '#1e2432'
        }
    }
    return(
        <button className='themeButton'
                onClick={toggleDarkMode}>
            {darkMode? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon}/>}</button>
    )
}
export default DarkThemeButton