import Header  from "./Header";
import Left from "./Sidebar/Left";
import Right from "./Sidebar/Right";
import Footer from "./Footer";

function DefaultLayout({ children }) {
    return (  
        <div>
            <Header />
            <div className='row m-0 ps-1 pe-2'>
                <Left />
                { children }
                <Right />
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;