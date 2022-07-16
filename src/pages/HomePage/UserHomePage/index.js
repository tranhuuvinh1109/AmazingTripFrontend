import { Link, useNavigate } from 'react-router-dom';
import removeCookie from "../../../hooks/removeCookie";
import { toast } from 'react-toastify';

function UserHomePage() {
    const navigate = useNavigate();
    const handlerLogout = () => {
        removeCookie('userin');
        toast.info("Đăng xuất thành công !!!", {
            toastId: 1,
        });
        navigate('/landing');
    }

    return (
        <>

            <div style={{ height: '1000px' }}>
                <h1>
                    User Home Page
                    <br/>
                    <Link to="/listAddresses">Danh sách địa điểm</Link>
                    <br/>
                    <Link to="/host">Trang của host</Link>
                    <br/>
                    <Link to="/user">Trang của người dùng</Link>
                    <br/>
                    <Link to="/group">Trang nhóm</Link>
                    <br/>
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