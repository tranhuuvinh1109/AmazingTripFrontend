import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MenuDropDown.module.scss';
import images from '../../../../../assets/images';
import removeCookie from '../../../../../hooks/removeCookie';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function Menu({userData}) {
    const navigate = useNavigate();
    const handlerLogout = () => {
        removeCookie('userin');
        toast.info("Đăng xuất thành công !!!", {
            toastId: 1,
        });
        navigate('/landing');
    }

    return (
        <ul className={cx('menu-list')}>
            <li className={cx('user-inf')}>
                <img src={userData.avatar ? userData.avatar : images.defaultAvatar} alt="User-avatar" className={cx('rounded-circle')}/>
                <label className={cx('ms-2')}>{userData?.nickname}</label>
            </li>

            <li className={cx('user-page-link')}>
                <Link to={`/user/${userData?.id}`} ><h5>Trang cá nhân</h5></Link>
            </li>

            <li className={cx('signout-link')}>
                <button onClick={() => handlerLogout()} >Đăng xuất</button>
            </li>
        </ul>
    )
}

export default Menu;