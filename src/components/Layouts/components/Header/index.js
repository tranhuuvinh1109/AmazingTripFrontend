import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import getCookie from '../../../../hooks/getCookie';
import { db } from '../../../../firebase';
import firebase from '../../../../firebase';
import 'tippy.js/dist/tippy.css'; // optional
import { useContext } from 'react';
import { MessageContext } from '../../../../context/MessageContext';
import MenuUser from './MenuUser';
import MenuNotification from './MenuNotification';
import MenuMessgae from './MenuMessage';
import Search from '../Search';

const cx = classNames.bind(styles);


function Header() {
    const {
        rooms,
        setRooms,
        messages,
        setMessages,
        selectedRoom,
        setSelectedRoom,
        notSeenCount,
        setNotSeenCount,
        notification,
        setNotification,
        notiCount,
        setNotiCount
    } = useContext(MessageContext);
    const history = useNavigate();
    //const userData = JSON.parse(getCookie('userin'));

    const [showMenu, setShowMenu] = useState(false);
    const [userData, setUserData] = useState('');

    const closeRef = useRef();
    //console.log(notification);
    //console.log(rooms)
    //console.log(messages);
    
    useLayoutEffect(()=>{
        let resJSON ;
        const res = getCookie('userin');
        if(res)
            resJSON = JSON.parse(res)
        if(resJSON)
            setUserData(resJSON);
    }, []);

    useEffect(() => {
        const handler = (e) => {
            if (!closeRef?.current?.contains(e.target))
                setShowMenu(false);
        }

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    })
    
    function updateSeen() {
        let resJSON ;
        const res = getCookie('userin');
        if(res)
            resJSON = JSON.parse(res)
        let batch = db.batch();
        db.collection('notifications').where('user2', 'array-contains', resJSON.id).where('seen', '==', 0).get().
        then((data)=>{
            //console.log(data.docs.length)
            if(data.docs.length!=0){
            data.docs.forEach(element => {
                batch.update(element.ref, 'seen', 1);
            }
        ); 
        batch.commit();
        }
        });
    }
    
    return (
        <header className={cx('sticky-top pt-2 pb-2')}>
            <div className={cx('container-fluid d-sm-flex justify-content-between align-items-center')}>
                <div className={cx('d-flex align-items-center')}>
                    <Link to='/'>
                        <img src={images.logo} alt="Logo" className={cx('nav-logo')} />
                    </Link>
                    <button onClick={() => history(-1)} className={cx('btn-go-back')}>
                        <i className="fa-solid fa-angle-left me-1"></i>
                        <span>Quay lại</span>
                    </button>
                </div>
                <Search />
                {
                    userData !== '' ? (
                        <ul className={cx('list-unstyled d-sm-flex align-items-center m-0 nav-left-group')}>
                            <li className={cx('message')}>
                                <Tippy
                                    theme={'light'}
                                    interactive={true}
                                    offset={[88, 16]}
                                    placement={'bottom-end'}
                                    animation={'fade'}
                                    arrow={true}
                                    trigger={'click'}
                                    allowHTML={true}
                                    content={(<MenuMessgae userData={userData} />)}
                                    className={cx('tippy-box')}
                                >
                                    <button className={cx('btn-noti')} >
                                        <i className={cx('fa-brands fa-facebook-messenger')}></i>
                                    </button>
                                </Tippy>
                            </li>
                            <li className={cx('notification')}  onClick={()=>updateSeen()}>
                                <Tippy
                                    theme={'light'}
                                    interactive={true}
                                    offset={[60, 16]}
                                    placement={'bottom-end'}
                                    animation={'fade'}
                                    arrow={true}
                                    trigger={'click'}
                                    allowHTML={true}
                                    content={(<MenuNotification userData={userData} />)}
                                    className={cx('tippy-box')}
                                >
                                    <button className={cx('btn-noti')} >
                                        <i className={cx('fa-regular fa-bell')}></i>
                                    </button>
                                </Tippy>
                            </li>
                            <li ref={closeRef} className={cx('user-avatar')}>
                                <Tippy
                                    theme={'light'}
                                    interactive={true}
                                    placement={'bottom-end'}
                                    animation={'fade'}
                                    arrow={false}
                                    trigger={'click'}
                                    allowHTML={true}
                                    content={(<MenuUser userData={userData} />)}
                                >
                                    <button className={cx('btn-avatar')} >
                                        <img src={userData.avatar ? userData.avatar : images.defaultAvatar} className={cx('rounded-circle')} />
                                    </button>
                                </Tippy>
                            </li>
                        </ul>
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