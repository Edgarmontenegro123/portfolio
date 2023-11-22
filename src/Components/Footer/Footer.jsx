import './Footer.scss';

const Footer = () => {
    const date = new Date().getFullYear();
    return(
        <div className = 'footer'>
            Made with <i className='fa-solid fa-heart-pulse'></i> by Edgar Montenegro!
            <br/>
            All rights reserved &copy; {date}
        </div>
    );
};
export default Footer;