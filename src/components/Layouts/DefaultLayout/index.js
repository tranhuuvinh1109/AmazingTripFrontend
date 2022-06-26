import { Fragment } from "react";
import { Header, Footer } from '../components';

function DefaultLayout({ children }) {
    return ( 
        <Fragment>
            <Header />
            <div className='m-0 ps-1 pe-1'>
                { children }
            </div>
            <Footer />
        </Fragment>
    );
}

export default DefaultLayout;