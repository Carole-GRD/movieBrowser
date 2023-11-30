
import { Link } from "react-router-dom"
import HomeIcon from '../../../assets/icons/home2.svg'
import DiscoverIcon from '../../../assets/icons/search.svg'
import UserIcon from '../../../assets/icons/user.svg'


export default function MainNavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <img src={HomeIcon} alt="Retourner à la page d'accueil" />
                    </Link>
                </li>
                <li>
                    <Link to="/discover">
                    <img src={DiscoverIcon} alt="Rechercher un film" />
                    </Link>
                </li>
                <li>
                    <Link to="/account">
                    <img src={UserIcon} alt="Accéder à mon compte utilisateur" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
