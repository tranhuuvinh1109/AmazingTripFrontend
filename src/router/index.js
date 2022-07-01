//Layout
import { 
    DefaultLayout, 
    OneSide, 
    LoginLayout 
} from '../components/Layouts';

// Pages
import LandingPage from '../pages/LandingPage';
import Home from '../pages/Home';
import BlogAddress from '../pages/BlogAddress';
import HostPage from '../pages/HostPage';
import UserPage from '../pages/UserPage';
import UserEditPage from '../pages/UserEditPage';
import CreatePost from '../pages/CreatePost';
import GroupPage from '../pages/GroupPage';
import Form from '../pages/Form';
import UpdateAdress from '../pages/UpdateAddress';
import Sale from "../pages/Sale";
import Register from '../pages/AuthPage/Register';
import ListAddresses from '../pages/ListAddresses';

// Provider
import { FormDiscountProvider } from '../pages/BlogAddress/FormDiscountContext';
import { CreatePostProvider } from '../pages/GroupPage/CreatePostContext';

import Login from '../pages/AuthPage/Login';

// Public Page
const publicRoutes = [

    //Auth
    { path: '/login', component: Login, layout: LoginLayout },
    { path: '/register', component: Register, layout: LoginLayout },
    { path: '/landing', component: LandingPage, layout: DefaultLayout },
];

const privateRoutes = [
    { path: '/', component: Home, layout: OneSide },
    // { path: '/blog', component: BlogAddress, layout: DefaultLayout, provider: FormDiscountProvider },
    { path: '/address/:id/createBlog', component: CreatePost, layout:DefaultLayout },
    { path: '/host', component: HostPage, layout: OneSide },
    { path: '/user', component: UserPage, layout: DefaultLayout },
    { path: '/user_edit', component: UserEditPage, layout: DefaultLayout },
    { path: '/group', component: GroupPage, layout: DefaultLayout, provider: CreatePostProvider },

    // SomeThing
    { path: '/createAddress', component: Form, layout: DefaultLayout },
    { path: '/updateAddress', component: UpdateAdress, layout: DefaultLayout },
    { path: '/addSale', component: Sale, layout: DefaultLayout },

    { path: '/listAddresses', component: ListAddresses, layout: DefaultLayout },
    { path: '/address/:id', component: BlogAddress, layout: DefaultLayout, provider: FormDiscountProvider},

];

export { publicRoutes, privateRoutes };