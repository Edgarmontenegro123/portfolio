import { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import './DarkThemeButton.scss';

const DarkThemeButton = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return(
        <button className='themeButton'
                onClick={toggleDarkMode}>
            {darkMode? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon}/>}</button>
    )
}
export default DarkThemeButton