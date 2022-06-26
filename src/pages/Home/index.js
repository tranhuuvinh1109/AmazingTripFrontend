import { Fragment  } from 'react';
import { Link } from 'react-router-dom';
import SlideShow from '../../components/Layout/components/SlideShow';


function Home() {

    return (
        <Fragment>
            <div style={{ height: '1000px' }}>
                <h1>
                    HomePage
                    <br/>
                    <Link to="/blog">Chi tiết địa điểm</Link>
                    <br/>
                    <Link to="/host">Trang của host</Link>
                    <br/>
                    <Link to="/user">Trang của người dùng</Link>
                </h1>
            </div>
        </Fragment>
    )
}

export default Home;