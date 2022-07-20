import { useContext, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import styles from './FriendList.module.scss';
import UserMenu from './UserMenu';
import images from '../../../../../../assets/images';
import { GlobalContext } from '../../../../../../context/GlobalContext';
import getImage from '../../../../../../hooks/getImage';

const cx = classNames.bind(styles);


function FriendList({ activedList }) {
    const globalContext = useContext(GlobalContext);

    return (
        <>
            {activedList && (
                <ul className={cx('list-users')}>
                    <span className={cx('line-span')}></span>
                    <div className={cx('list-content')}>
                        {
                            globalContext.followData.length !== 0 ?
                                globalContext.followData?.map((each) =>
                                (
                                    <li
                                        key={each.id}
                                        className={cx('each-user')}
                                    >
                                        <Tippy
                                            theme={'custom'}
                                            interactive={true}
                                            placement={'left'}
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
                                )
                                ) : (
                                    <p className={cx('empty-address')}>Chưa có người bạn nào !!!</p>
                                )
                        }
                    </div>
                </ul>
            )}
        </>
    )
}

export default FriendList;