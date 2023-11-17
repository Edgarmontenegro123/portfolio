import './Title.scss'

const Title = () => {
    let p = '<'
    let q = '/>'

    return(
        <div className='title'>
            <h1>Hola, mi nombre es <b>Edgar</b>!</h1>
            <hr className='title__divider' />
            <h2><b>{p} Software Developer {q}</b></h2>
            <hr className='title__divider' />
        </div>
    )
}
export default Title


