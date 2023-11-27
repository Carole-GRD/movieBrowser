import React from 'react'

import { Link } from "react-router-dom"
import HomeIcon from '../../assets/icons/home.png'
import SearchIcon from '../../assets/icons/search.png'
import UserIcon from '../../assets/icons/user.png'


export default function SearchBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <img src={HomeIcon} alt="Retourner à la page d'accueil" />
                    </Link>
                </li>
                <li>
                    <Link to="/search">
                    <img src={SearchIcon} alt="Rechercher un film" />
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
