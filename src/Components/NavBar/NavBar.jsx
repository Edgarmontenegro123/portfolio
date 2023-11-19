import DarkThemeButton from "../DarkThemeButton/DarkThemeButton.jsx";
import './NavBar.scss'

const NavBar = () => {
    return(
        <div className='navBar'>
            <ul>
                <li><b>Home</b></li>
                <li><b>Projects</b></li>
                <li><b>Skills</b></li>
                <li><b>Contact</b></li>
                <DarkThemeButton/>
            </ul>
        </div>
    )
}
export default NavBar