import classNames from 'classnames/bind';
import styles from './ListItem.module.scss';
import { Link } from 'react-router-dom';
import { BlogAddressContext } from '../../../../../../pages/BlogAddress/BlogAddressContext';
import { useContext } from 'react';


const cx = classNames.bind(styles);

function GroupList ({ activedList }) {

    const context = useContext(BlogAddressContext);

    return (
        <div>
            {activedList && (
                <ul className={cx('list-users')}>
                    <span className={cx('line-span')}></span>
                    {context.groupList?.map( each => (
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
                                        {each.group_name}
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))}

                </ul>
            )}
        </div>
    )
}

export default GroupList;