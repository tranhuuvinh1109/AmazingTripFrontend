//Layout
import { DefaultLayout, OneSide, TwoSide } from '../components/Layouts';

// Pages
import Home from '../pages/Home';
import BlogAddress from '../pages/BlogAddress';
import HostPage from '../pages/HostPage';
import UserPage from '../pages/UserPage';
import UserEditPage from '../pages/UserEditPage';
import CreatePost from '../pages/CreatePost';

// Public Page
const publicRoutes = [
    
];

const privateRoutes = [
    { path: '/', component: Home, layout: OneSide },
    { path: '/blog', component: BlogAddress, layout:DefaultLayout },
    { path: '/blog/create', component: CreatePost, layout:DefaultLayout },
    { path: '/host', component: HostPage, layout: OneSide },
    { path: '/user', component: UserPage, layout: DefaultLayout },
    { path: '/user_edit', component: UserEditPage, layout: DefaultLayout }
];

export { publicRoutes, privateRoutes };