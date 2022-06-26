import { Fragment } from 'react'
import { Header, Right, Footer } from '../components';

function OneSie({ children }) {
    return (  
        <Fragment>
            <Header />
            <div className='row m-0 ps-1 pe-1'>
                <div className="col-sm-10 mb-4" id="body-content">
                    { children }
                </div>
                
                <div className="col-sm-2 ps-0 pe-1">
                    <Right />
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default OneSie;