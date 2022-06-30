import { Fragment  } from 'react';
import { Link } from 'react-router-dom';


function LandingPage() {

    return (
        <Fragment>
            <div style={{ height: '1000px' }}>
                <h1>
                    Landing Page
                    <br/>
                    <Link to="/login">Đăng nhập</Link>
                    <br/>
                    <Link to="/register">Đăng ký</Link>
                </h1>
            </div>
        </Fragment>
    )
}

export default LandingPage;