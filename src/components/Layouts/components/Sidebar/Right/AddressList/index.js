import classNames from 'classnames/bind';
import styles from './ListItem.module.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import { GlobalContext } from '../../../../../../context/GlobalContext';


const cx = classNames.bind(styles);

function AddressList ({ activedList }) {

    const globalContext = useContext(GlobalContext);

    return (
        <div>
            {activedList && (
                <ul className={cx('list-users')}>
                    <span className={cx('line-span')}></span>
                    <div className={cx('list-content')}>
                        {
                            globalContext.bookmarkData?.length != 0 ? (
                                globalContext.bookmarkData?.map( each => (
                                    <li 
                                        key={each.address_id} 
                                        className={cx('each-user')}
                                    >
                                        <Link 
                                            className={cx('btn-user')}
                                            to={`/address/${each.address_id}`}
                                        >
                                            <div className={cx('d-flex align-items-center ps-4')}>
                                                <span className={cx('ms-2')}>
                                                    {each.address_name || <Skeleton />}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            ) : 
                            (
                                <p className={cx('empty-address')}>Chưa theo dõi địa điểm nào !!!</p>
                            )
                        }
                    </div>

                </ul>
            )}
        </div>
    )
}

export default AddressList;