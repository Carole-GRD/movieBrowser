import React from 'react'

import App from "../App";
import AccountPage from "../pages/account/account.page";
import HomePage from "../pages/home/home.page";
import SearchPage from "../pages/search/search.page";
import ShowPage from '../pages/show/show.page';


export const route = [
    {
        path: '',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/movie/:id',
                element: <ShowPage />
            },
            {
                path: '/search',
                element: <SearchPage />
            },
            {
                path: '/account',
                element: <AccountPage />
            }
        ]
    }
]