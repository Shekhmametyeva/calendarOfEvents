import Home from "../components/pages/Home/Home";
import PersonalAccount from "../components/pages/PersonalAccount/PersonalAccount";
import Error from "../components/pages/Error/Error";

export const routes = [
    {path: '/', element: Home},
    {path: '/home', element: Home},
    {path: '/personal-account', element: PersonalAccount},
    {path: '*', element: Error},
];