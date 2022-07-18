import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './UserMenu.module.scss';
import images from '../../../../../../../assets/images';

const cx = classNames.bind(styles);


function UserMenu({ openStatus, userInf })  {
    
    const [show, setShow] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setShow(!show);
        }, 200)
    }, [])

    const isLeft = openStatus ? { left: '100%', paddingLeft: '10px' } : { right: '100%', paddingRight: '10px'};

    return (
        <div>
            {show && (
                <div 
                    className={cx('user-menu')}
                    style={isLeft}
                >
                    <div className={cx('user-profile')}>
                        <div className={cx('d-flex align-items-center justify-content-center pt-2')}>
                            <a href="#">
                                <img 
                                    id="User-avatar"
                                    className={cx('rounded-circle')} 
                                    src={userInf.avatar || images.defaultava}
                                />
                            </a>
                            <div className={cx('follow-inf')}>
                                <Link to={`/user/${userInf.id_user}`} >
                                    <h6 className={cx('m-0')}>{userInf.nickname}</h6>
                                </Link>
                                <i className={cx('fa-solid fa-users')}></i>
                                <span className={cx('ms-2')}>{userInf.follower}</span>
                            </div>
                        </div>
                        <div className={cx('user-page-link')}>
                            <Link to={`/user/${userInf.id_user}`} >
                                Trang cá nhân
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>    
    )
}

export default UserMenu