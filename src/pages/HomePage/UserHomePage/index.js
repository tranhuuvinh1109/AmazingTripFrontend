import { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import removeCookie from "../../../hooks/removeCookie";
import Avatar from '../../../components/Layouts/components/Avatar';
import getCookie from '../../../hooks/getCookie';

function UserHomePage() {
    const navigate = useNavigate();
    const handlerLogout = () => {
        removeCookie('userin');
        toast.info("Đăng xuất thành công !!!", {
            toastId: 1,
        });
        navigate('/landing');
    }

    const userData = JSON.parse(getCookie('userin'));

    return (
        <>

            <div style={{ height: '1000px' }}>
                <h1>
                    User Home Page
                    <br/>
                    <Link to="/listAddresses">Danh sách địa điểm</Link>
                    <br/>
                    <Avatar 
                        src={userData?.avatar} 
                        size='50px'
                        userData={userData}
                    />
                    <button
                        onClick={() => handlerLogout()}
                    >
                        Đăng xuất
                    </button>
                    <br/>
                </h1>
            </div>
        </>
    )
}

export default UserHomePage;