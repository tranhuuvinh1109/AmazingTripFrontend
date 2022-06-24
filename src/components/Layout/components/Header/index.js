import { Link, useParams, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { useState, useEffect } from 'react';

import Menu from './MenuDropDown';

const cx = classNames.bind(styles);

function Header() {

    const history = useNavigate()

    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        document.addEventListener('mousedown', () => {
            setShowMenu(false)
        })
    })

    return (
        <header className={cx('sticky-top pt-2 pb-2')}>
            <div className={cx('container-fluid d-sm-flex justify-content-between align-items-center')}>
                <div className={cx('d-flex align-items-center')}>
                    <Link to='/'>
                        <img src={images.logo} alt="Logo" className={cx('nav-logo')}/>
                    </Link>
                    <button onClick={() => history(-1)} className={cx('btn-go-back')}>
                        <i className="fa-solid fa-angle-left me-1"></i>
                        <span>Quay lại</span>
                    </button>
                </div>
                <div className={cx('search-bar')}>
                    <form action="#" className={cx('input-group')}>
                        <div className={cx('d-sm-flex align-items-center')}>
                            <span className={cx('search-icon')}><i className={cx('fa-solid fa-magnifying-glass me-sm-2')}></i></span>
                            <input className={cx('flex-grow-1')} type="text" placeholder="Nơi bạn muốn tới..."/>
                            <span className={cx('delete-icon')}><i className={cx('fa-solid fa-xmark ps-2')}></i></span>
                        </div>
                    </form>
                </div>
                <ul className={cx('list-unstyled d-sm-flex align-items-center m-0 nav-left-group')}>
                    <li className={cx('message')}><i className={cx('fa-brands fa-facebook-messenger')}></i></li>
                    <li className={cx('notification')}><i className={cx('fa-solid fa-bell ms-sm-2')}></i></li>
                    <li className={cx('user-avatar')}>
                        <button 
                            className={cx('btn-avatar')}
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <img src={images.userAvatar} alt="User-avatar" className={cx('rounded-circle')}/>
                        </button>
                        {showMenu && <Menu />}
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;