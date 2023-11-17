import './Header.scss'
import MainImage from "../MainImage/MainImage.jsx";
import Title from "../Title/Title.jsx";
import DarkThemeButton from "../DarkThemeButton/DarkThemeButton.jsx";

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