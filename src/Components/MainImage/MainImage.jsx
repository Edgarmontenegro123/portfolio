import Photo from "../../assets/Images/edgar.jpeg";
import './MainImage.scss';

const MainImage = () => {
    return(
        <>
            <img src={Photo} className='myImage' alt=''/>
        </>
    )
}
export default MainImage
