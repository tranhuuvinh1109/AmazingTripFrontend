import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
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
    )
}

export default Home;