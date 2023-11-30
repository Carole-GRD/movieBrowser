import React from 'react'

import App from "../App";
import AccountPage from "../pages/account/account.page";
import HomePage from "../pages/home/home.page";
import DiscoverPage from '../pages/discover/discover.page';
import DetailPage from '../pages/detail/detail.page';


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
                element: <DetailPage />
            },
            {
                path: '/discover',
                element: <DiscoverPage />
            },
            {
                path: '/account',
                element: <AccountPage />
            }
        ]
    }
]