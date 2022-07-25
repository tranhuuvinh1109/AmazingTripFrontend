//Layout
import { 
    DefaultLayout, 
    OneSide, 
    LoginLayout 
} from '../components/Layouts';

// Pages
import LandingPage from '../pages/LandingPage';
import UserPage from '../pages/UserPage';
import UserEditPage from '../pages/UserEditPage';
import CreatePost from '../pages/CreatePost';
import GroupPage from '../pages/GroupPage';
import CreateAddress from '../pages/AddressPage/CreateAddress';
import UpdateAdress from '../pages/UpdateAddress';
import Sale from '../pages/AddressPage/AddressHostPage/HostPage/Sale';
import Register from '../pages/AuthPage/Register';
import ListAddresses from '../pages/ListAddresses';
import HomePage from '../pages/HomePage';
import AddressPage from '../pages/AddressPage';
import HostPage from '../pages/AddressPage/AddressHostPage/HostPage';
import AddressHostPage from '../pages/AddressPage/AddressHostPage';

// Provider
import { UserPageProvider } from '../pages/UserPage/UserPageContext';
import { BlogAddressProvider } from '../pages/BlogAddress/BlogAddressContext';
import { GroupPageProvider } from '../pages/GroupPage/GroupPageContext';
import { RegisterProvider } from '../pages/AuthPage/Register/RegisterContext';

import Login from '../pages/AuthPage/Login';
import Test from '../pages/Test';

// Public Page
const publicRoutes = [

    //Auth
    { path: '/login', component: Login, layout: LoginLayout },
    { path: '/register', component: Register, layout: LoginLayout, provider: RegisterProvider },
    { path: '/landing', component: LandingPage, layout: DefaultLayout },
];

const privateRoutes = [

    { path: '/test', component: Test, layout: DefaultLayout },
    { path: '/', component: HomePage, layout: OneSide },
    // { path: '/blog', component: BlogAddress, layout: DefaultLayout, provider: BlogAddressProvider },
    { path: '/address/:id/createBlog', component: CreatePost, layout:DefaultLayout },
    { path: '/user/:id', component: UserPage, layout: DefaultLayout, provider: UserPageProvider },
    { path: '/user_edit/:id', component: UserEditPage, layout: DefaultLayout },
    { path: '/group/:id', component: GroupPage, layout: DefaultLayout, provider: GroupPageProvider },

    // SomeThing
    { path: '/createAddress/:id', component: CreateAddress, layout: DefaultLayout, provider: BlogAddressProvider },
    { path: '/updateAddress', component: UpdateAdress, layout: DefaultLayout },
    { path: '/addSale/:id', component: Sale, layout: DefaultLayout },
    // { path: '/addresshost/:id', component: AddressHostPage, layout: DefaultLayout },

    { path: '/listAddresses', component: ListAddresses, layout: DefaultLayout },
    { path: '/address/:id', component: AddressPage, layout: DefaultLayout, provider: BlogAddressProvider},

];

export { publicRoutes, privateRoutes };