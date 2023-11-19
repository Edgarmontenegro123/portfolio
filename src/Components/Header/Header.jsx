import DarkThemeButton from "../DarkThemeButton/DarkThemeButton.jsx";
import MainImage from "../MainImage/MainImage.jsx";
import Title from "../Title/Title.jsx";
import './Header.scss'

const Header = () => {
    return(
        <>
            <div className='divHeader'>
                <MainImage/>
                <Title/>
                <div>
                    <DarkThemeButton/>
                </div>
            </div>
        </>
    )
}
export default Header