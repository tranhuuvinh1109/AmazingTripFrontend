import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import classNames from 'classnames/bind';
import styles from './ListItem.module.scss';
import { GlobalContext } from '../../../../../../context/GlobalContext';

const cx = classNames.bind(styles);

function GroupList({ activedList }) {

    const globalContext = useContext(GlobalContext);

    return (
        <div>
            {activedList && (
                <ul className={cx('list-users')}>
                    <span className={cx('line-span')}></span>
                    <div className={cx('list-content')}>
                        {
                            globalContext.groupData?.length !== 0 ? (
                                globalContext.groupData?.map(each => (
                                    <li
                                        key={each.group_id}
                                        className={cx('each-user')}
                                    >
                                        <Link
                                            className={cx('btn-user')}
                                            to={`/group/${each.group_id}`}
                                        >
                                            <div className={cx('d-flex align-items-center ps-4')}>
                                                <span className={cx('ms-2')}>
                                                    {each.group_name || <Skeleton />}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            ) : (
                                <p className={cx('empty-address')}>Không có nhóm !!!</p>
                            )
                        }
                    </div>
                </ul>
            )}
        </div>
    )
}

export default GroupList;