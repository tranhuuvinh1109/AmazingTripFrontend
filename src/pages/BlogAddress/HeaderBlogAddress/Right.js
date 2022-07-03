import React from 'react';
import classNames from 'classnames/bind';
import styles from './Right.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Right() {
    return (
        <div className={cx('right')}>
            <div className={cx('btn-book')}>
                <button className={cx('btn')}><i className="fa-regular fa-bookmark"></i> Bookmark</button>
            </div>
            <div className={cx('btn-write')}>
                <button className={cx('btn')}>
                    <Link to='/blog/create'>
                        <i className="fa-solid fa-pen"></i> 
                        viết bài
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Right;