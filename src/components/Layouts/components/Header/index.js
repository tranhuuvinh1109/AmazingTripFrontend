import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import getCookie from '../../../../hooks/getCookie';
import { db } from '../../../../firebase';
import firebase from '../../../../firebase';
import Menu from './MenuDropDown';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useContext } from 'react';
import { MessageContext } from '../../../../context/MessageContext';

const cx = classNames.bind(styles);


function Header() {
    const {
        rooms,
        setRooms,
        messages,
        setMessages,
        selectedRoomId,
        setSelectedRoomId,
        notSeenCount,
        setNotSeenCount,
        notification,
        setNotification,
        notiCount,
        setNotiCount
    } = useContext(MessageContext);
    const history = useNavigate();
    //const userData = JSON.parse(getCookie('userin'));

    const [userData, setUserData] = useState(''); 
    const [showMenu, setShowMenu] = useState(false); 

    const closeRef = useRef();
    //console.log(notification);
    //console.log(rooms)
    //console.log(messages);
    useEffect(()=>{
        let resJSON ;
        const res = getCookie('userin');
        if(res)
            resJSON = JSON.parse(res)
        console.log(resJSON);
        if(resJSON)
            setUserData(resJSON);
    }, []);
    useEffect(() => {
        const handler = (e) => {
            if(!closeRef?.current?.contains(e.target))
                setShowMenu(false);
        }

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
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
                {
                    userData !== '' ? (
                    
                    <div className={cx('list-unstyled d-sm-flex align-items-center m-0 nav-left-group')}>
                        <div className={cx('message')}>
                            <div className='dropdown'>
                                <i className={cx('fa-brands fa-facebook-messenger dropdown-toggle')} id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                    {notification.map((item)=>(<a className='dropdown-item'>{item.content}</a>))}
                                </ul>
                            </div>
                        </div>
                        <div className={cx('notification')}>
                            <div className='dropdown'>
                                <i className={cx('fa-regular fa-bell ms-sm-2 dropdown-toggle')} id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    {notification.map((item)=>(<a className='dropdown-item'>{item.content}</a>))}
                                </ul>
                            </div>
                        </div>
                        <div ref={closeRef} className={cx('user-avatar')}>
                            <button 
                                className={cx('btn-avatar')}
                                onClick={() => setShowMenu(!showMenu)}
                            >
                                <img src={userData.avatar ? userData.avatar : images.defaultAvatar} alt="User-avatar" className={cx('rounded-circle')}/>
                            </button>
                            {showMenu && <Menu userData={userData}/>}
                        </div>
                    </div>
                    ) : (
                        <Link to='/login'>
                            <button className={cx('btn-login')}>
                                Đăng nhập
                            </button>
                        </Link>
                    )
                }
            </div>
        </header>
    );
}

export default Header;