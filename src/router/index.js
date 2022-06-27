//Layout
import { DefaultLayout, OneSide, TwoSide, LoginLayout } from '../components/Layouts';

// Pages
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


import {OptionLogin, LoginByPhoneNumber} from '../pages/Login';
import { 
        OptionRegister, 
        RegisterByPhoneNumberStep1, 
        RegisterByPhoneNumberStep2, 
        RegisterByPhoneNumberStep3, 
        RegisterByPhoneNumberStep4 
    } from '../pages/Register'

// Public Page
const publicRoutes = [
];

const privateRoutes = [
    { path: '/', component: Home, layout: OneSide },
    { path: '/blog', component: BlogAddress, layout:DefaultLayout },
    { path: '/blog/create', component: CreatePost, layout:DefaultLayout },
    { path: '/host', component: HostPage, layout: OneSide },
    { path: '/user', component: UserPage, layout: DefaultLayout },
    { path: '/user_edit', component: UserEditPage, layout: DefaultLayout },
    { path: '/group', component: GroupPage, layout: DefaultLayout },

    // SomeThing
    { path: '/createAddress', component: Form, layout: DefaultLayout },
    { path: '/updateAddress', component: UpdateAdress, layout: DefaultLayout },
    { path: '/addSale', component: Sale, layout: DefaultLayout },
    //Login
    { path: '/login', component: OptionLogin, layout: LoginLayout },
    { path: '/login/by-phone-number', component: LoginByPhoneNumber, layout: LoginLayout },
    //Register
    { path: '/register', component: OptionRegister, layout: LoginLayout },
    { path: '/register/by-phone-number/step1', component: RegisterByPhoneNumberStep1, layout: LoginLayout },
    { path: '/register/by-phone-number/step2', component: RegisterByPhoneNumberStep2, layout: LoginLayout },
    { path: '/register/by-phone-number/step3', component: RegisterByPhoneNumberStep3, layout: LoginLayout },
    { path: '/register/by-phone-number/step4', component: RegisterByPhoneNumberStep4 , layout:LoginLayout }
];

export { publicRoutes, privateRoutes };