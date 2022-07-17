import { Fragment } from "react";
import { Header, Footer } from '../components';
import getCookie from "../../../hooks/getCookie";

function DefaultLayout({ children }) {
    return ( 
        <Fragment>
            <Header />
            <div>
                { children }
            </div>
            <Footer />
        </Fragment>
    );
}

export default DefaultLayout;