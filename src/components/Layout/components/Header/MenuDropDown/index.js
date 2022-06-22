import classNames from 'classnames/bind';
import styles from './MenuDropDown.module.scss';
import images from '../../../../../assets/images';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <ul className={cx('menu-list')}>
            <li className={cx('user-inf')}>
                <img src={images.userAvatar} alt="User-avatar" className={cx('rounded-circle')}/>
                <label className={cx('ms-2')}>User_name</label>
            </li>

            <li className={cx('user-page-link')}>
                <a href="#" ><h5>Trang cá nhân</h5></a>
            </li>

            <li className={cx('signout-link')}>
                <a href="#" ><h5>Đăng xuất</h5></a>
            </li>
        </ul>
    )
}

export default Menu;