import React from 'react'

import { Link } from "react-router-dom"


export default function SearchBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <img src="./src/assets/icons/home.png" alt="Retourner à la page d'accueil" />
                    </Link>
                </li>
                <li>
                    <Link to="/search">
                    <img src="./src/assets/icons/search.png" alt="Rechercher un film" />
                    </Link>
                </li>
                <li>
                    <Link to="/account">
                    <img src="./src/assets/icons/user.png" alt="Accéder à mon compte utilisateur" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
