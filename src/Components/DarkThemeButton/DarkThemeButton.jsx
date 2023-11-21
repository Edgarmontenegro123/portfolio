import { useState} from 'react';
import './DarkThemeButton.scss';

const DarkThemeButton = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        const body = document.body

        if(darkMode) {
            body.classList.remove('darkMode')
            body.classList.add('lightMode')
        }
        else {
            body.classList.remove('lightMode')
            body.classList.add('darkMode')
        }
    }
    return(
        <button className='themeButton'
                onClick={toggleDarkMode}>
            {darkMode? <i className='fa-solid fa-sun' /> : <i className='fa-solid fa-moon' />}
        </button>
    )
}
export default DarkThemeButton