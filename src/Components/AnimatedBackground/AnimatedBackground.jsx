import PropTypes from 'prop-types';
import './AnimatedBackground.scss'

const AnimatedBackground = ({children}) => {
    return(
        <div className ='hero'>
            {children}
            <div className ='hero__title'></div>
            <div className ='cube'></div>
            <div className ='cube'></div>
            <div className ='cube'></div>
            <div className ='cube'></div>
            <div className ='cube'></div>
            <div className ='cube'></div>
        </div>
    )
}
AnimatedBackground.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AnimatedBackground