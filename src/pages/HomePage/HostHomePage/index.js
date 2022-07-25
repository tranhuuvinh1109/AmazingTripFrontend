import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import getCookie from '../../../hooks/getCookie';
import removeCookie from "../../../hooks/removeCookie";
import Addresses from './Addresses';


function HostHomePage() {
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
            <div>
                <Addresses/>
            </div>
        </>
    )
}

export default HostHomePage;