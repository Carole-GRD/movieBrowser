import definition4KIcon from '../../../assets/icons/4K.svg'
import clockIcon from '../../../assets/icons/clock.svg'
import starIcon from '../../../assets/icons/star.svg'


function TitleComponent( {title, runtime, voteAverage} ) {
    return (
        <div className='detail-title'>  
            <div>
                <h2>{title}</h2>
                <img src={definition4KIcon} alt="Définition 4K" />
            </div>
            <div>
                <img src={clockIcon} alt="Durée du film" />
                <p>{runtime} minutes</p>
                <img src={starIcon} alt="Moyenne des votes" />
                <p>{voteAverage} (IMDb)</p>
            </div>
        </div>
    )
}

export default TitleComponent
