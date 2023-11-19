import DarkThemeButton from "../DarkThemeButton/DarkThemeButton.jsx";
import {Link} from "react-router-dom";
import './NavBar.scss'

const NavBar = () => {
    return(
        <div className='navBar'>
            <ul>
                <li><Link to='/' className='link'><b>Home</b></Link></li>
                <li><Link to='/projects' className='link'><b>Projects</b></Link></li>
                <li><Link to='/skills' className='link'><b>Skills</b></Link></li>
                <li><Link to='/contact' className='link'><b>Contact</b></Link></li>
                <DarkThemeButton/>
            </ul>
        </div>
    )
}
export default NavBar