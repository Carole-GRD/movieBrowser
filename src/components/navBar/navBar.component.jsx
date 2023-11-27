import React from 'react'

import { Link } from "react-router-dom"
import { homeIcon } from '../../assets/icons/home.png'
import { searchIcon } from '../../assets/icons/search.png'
import { userIcon } from '../../assets/icons/user.png'


export default function SearchBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <img src={homeIcon} alt="Retourner à la page d'accueil" />
                    </Link>
                </li>
                <li>
                    <Link to="/search">
                    <img src={searchIcon} alt="Rechercher un film" />
                    </Link>
                </li>
                <li>
                    <Link to="/account">
                    <img src={userIcon} alt="Accéder à mon compte utilisateur" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
