import { useContext, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import styles from './FriendList.module.scss';
import UserMenu from './UserMenu';
import images from '../../../../../../assets/images';
import { BlogAddressContext } from '../../../../../../pages/BlogAddress/BlogAddressContext';
import getImage from '../../../../../../hooks/getImage';

const cx = classNames.bind(styles);


function FriendList({ activedList }) {
    const context = useContext(BlogAddressContext);

    return (
        <>
            {activedList && (
                <ul className={cx('list-users')}>
                    <span className={cx('line-span')}></span>
                    <div className={cx('list-content')}>
                        {
                            context.friendList?.length !== 0 ? (
                                context.friendList?.map((each) => (
                                    <li
                                        key={each.id_user}
                                        className={cx('each-user')}
                                    >
                                        <Tippy
                                            theme={'custom'}
                                            interactive={true}
                                            placement={'right'}
                                            animation={'fade'}
                                            arrow={false}
                                            allowHTML={true}
                                            content={(<UserMenu userInf={each} />)}
                                            className={cx('tippy-box')}
                                        >
                                            <button className={cx('btn-user')}>
                                                <div className={cx('d-flex align-items-center ps-4')}>
                                                    <img
                                                        id="User-avatar"
                                                        className={cx('rounded-circle')}
                                                        src={each.avatar}
                                                    />
                                                    <span className={cx('ms-2')} style={{ color: '#094067' }}>{each.nickname}</span>
                                                </div>
                                            </button>
                                        </Tippy>
                                    </li>
                                ))
                            ) : (
                                <p className={cx('empty-address')}>Chưa có người bạn nào !!!</p>
                            )}
                    </div>
                </ul>
            )}
        </>
    )
}

export default FriendList;