//Layout
import { DefaultLayout, OneSide, TwoSide } from '../components/Layout';

// Pages
import Home from '../pages/Home';
import BlogAddress from '../pages/BlogAddress';
import HostPage from '../pages/HostPage';
import UserPage from '../pages/UserPage';
import UserEditPage from '../pages/UserEditPage';

// Public Page
const publicRoutes = [
    
];

const privateRoutes = [
    { path: '/', component: Home, layout: OneSide },
    { path: '/blog', component: BlogAddress, layout:TwoSide },
    { path: '/host', component: HostPage, layout: OneSide },
    { path: '/user', component: UserPage, layout: DefaultLayout },
    { path: '/user_edit', component: UserEditPage, layout: DefaultLayout }
];

export { publicRoutes, privateRoutes };