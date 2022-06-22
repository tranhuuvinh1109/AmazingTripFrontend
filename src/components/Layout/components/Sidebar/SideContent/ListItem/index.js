import classNames from 'classnames/bind';
import styles from './ListItem.module.scss';
import images from '../../../../../../assets/images';
import { useState } from 'react';

import UserMenu from '../UserMenu';

const cx = classNames.bind(styles);

const listUsers = [
    {
        id: 1,
        nickname: 'User_name_1',
        image: '',
        follower: '5.6k'
    },
    {
        id: 2,
        nickname: 'User_name_1',
        image: '',
        follower: '5.6k'
    },
    {
        id: 3,
        nickname: 'User_name_1',
        image: '',
        follower: '5.6k'
    }
]

function ListItem ({ location, openStatus, activedList }) {
    const [test, setTest] = useState([]);

    return (
        <div>
            {activedList && (
                <ul className={cx('list-users')}>
                    <span className={cx('line-span')}></span>
                    {listUsers.map( user => (
                        <li 
                            key={user.id} 
                            className={cx('each-user')}
                        >
                            <button 
                                className={cx('btn-user')}
                                onMouseOver={() => setTest([user.id])}
                                onMouseOut={() => setTest([])}
                            >
                                <div className={cx('d-flex align-items-center ps-4')}>
                                    { !location && 
                                        <img 
                                            id="User-avatar"
                                            className={cx('rounded-circle')} 
                                            src={images.userAvatar} alt="User-avatar" 
                                        />
                                    }
                                    <span className={cx('ms-2')}>{user.nickname}</span>
                                </div>
                                { !location && test.includes(user.id) && (
                                    <UserMenu 
                                        openStatus={openStatus} 
                                        userInf={user} 
                                    />
                                )}
                            </button>
                        </li>
                    ))}

                </ul>
            )}
        </div>
    )
}

export default ListItem;