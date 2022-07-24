import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import getCookie from '../../../hooks/getCookie';
import removeCookie from "../../../hooks/removeCookie";


function HostHomePage() {
    const userData = JSON.parse(getCookie('userin'));
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
                    Host Home Page
                    <br/>
                    <Link to="/listAddresses">Danh sách địa điểm</Link>
                    <br/>
                    <Link to={`/createAddress/${userData.id}`}>Tạo địa điểm</Link>
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

export default HostHomePage;