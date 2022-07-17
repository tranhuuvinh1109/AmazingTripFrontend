import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Left.module.scss';
import { BlogAddressContext } from '../BlogAddressContext';
import Skeleton from 'react-loading-skeleton';

const cx = classNames.bind(styles);

function Left() {
    const context = useContext(BlogAddressContext);

    return (
        <div className={cx('left')}>
            <div className={cx('address')}>
                <h2 className={cx('name')}>{context.addressData.address_name}</h2>
                <i className={cx('fa-solid fa-location-dot')}></i>
                <span className={cx('avatar')}>
                    <img src={context.addressData.avatar} className={cx('avt')} />
                </span>
            </div>

            <div className={cx('star')}>
                <i className={cx('fa-solid fa-star')}></i>
                <i className={cx('fa-solid fa-star')}></i>
                <i className={cx('fa-solid fa-star')}></i>
                <i className={cx('fa-solid fa-star')}></i>
                <i className={cx('fa-solid fa-star')}></i>
                <span>{context.addressData.address_id}</span>
            </div>
        </div>
    )
}

export default Left;