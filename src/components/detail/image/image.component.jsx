
import Play from '../../../assets/icons/play3.svg'

function ImageComponent( { image, title } ) {
    return (
        <div className='detail-image'>
            <img
                src={`https://image.tmdb.org/t/p/w500${image}`}
                alt={"Image du film " + title}
            />
            <img src={Play} alt="Lecture" />
        </div>
    )
}

export default ImageComponent
