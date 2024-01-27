import './Title.scss'
import TypeWriter from "../../assets/Functions/Functions.jsx";
import {useEffect, useState} from "react";

const Title = () => {
    const [showH2, setShowH2] = useState(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowH2(true)
        }, 2000)
        return () => clearTimeout(timeoutId)
    }, [])

    return(
        <div className='title'>
            <h1><TypeWriter text='Hola, mi nombre es Edgar!'/></h1>
            <hr className='title__divider' />
            {showH2 && (
                <>
                    <h2><TypeWriter text='<Software Developer/>'/></h2>
                    <hr className='title__divider' />
                </>
            )}
        </div>
    )
}
export default Title
