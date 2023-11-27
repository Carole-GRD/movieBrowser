import App from "../App";
import AccountPage from "../pages/account/account.page";
import HomePage from "../pages/home/home.page";
import SearchPage from "../pages/search/search.page";


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