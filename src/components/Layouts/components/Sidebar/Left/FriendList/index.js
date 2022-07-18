import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FriendList.module.scss';
import UserMenu from './UserMenu';
import images from '../../../../../../assets/images';
import { BlogAddressContext } from '../../../../../../pages/BlogAddress/BlogAddressContext';
import { useContext } from 'react';

const cx = classNames.bind(styles);


function FriendList ({ activedList }) {
    const context = useContext(BlogAddressContext);
    const [test, setTest] = useState([]);

    return (
        <>
            {activedList && (
                <ul className={cx('list-users')}>
                    <span className={cx('line-span')}></span>
                        {context.friendList?.map( (each) => (
                            <li 
                                key={each.id_user} 
                                className={cx('each-user')}
                            >
                                <button 
                                    className={cx('btn-user')}
                                    onMouseOver={() => setTest([...test, each.id_user])}
                                    onMouseOut={() => setTest([])}
                                >
                                    <div className={cx('d-flex align-items-center ps-4')}>
                                        <img 
                                            id="User-avatar"
                                            className={cx('rounded-circle')} 
                                            src={each.avatar || images.defaultava}
                                        />
                                        <span className={cx('ms-2')} style={{ color: '#094067' }}>{each.nickname}</span>
                                    </div>
                                    { test.includes(each.id_user) && (
                                        <UserMenu 
                                            openStatus={true} 
                                            userInf={each} 
                                        />
                                    )}
                                </button>
                            </li>
                        ))}
                </ul>
            )}
        </>
    )
}

export default FriendList;