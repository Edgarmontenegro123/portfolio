import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TypeWriter = ({text}) => {
    const [displayText, setDisplayText] = useState('')

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            setDisplayText(text.substring(0, currentIndex));
            currentIndex ++;

            if (currentIndex > text.length) {
                clearInterval(intervalId);
            }
        }, 60);

        return () => clearInterval(intervalId);
    }, [text])

    return <>{displayText}</>
}

TypeWriter.propTypes = {
    text: PropTypes.string.isRequired,
};

export default TypeWriter