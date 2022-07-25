import { Fragment } from "react";
import { Header, Footer } from '../components';
import ChatBox from "../components/ChatBox";


function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <div style={{ display: 'relative' }}>
                {children}
                <ChatBox />
            </div>
            <Footer />
        </Fragment>
    );
}

export default DefaultLayout;