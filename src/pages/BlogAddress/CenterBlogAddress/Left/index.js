import React, { useState } from 'react';
import styles from './LeftContent.module.scss';
import Bottom from './Bottom';
import Top from './Top';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


function LeftContent() {
    return (
        <div className={cx('container')}>
            <div className={cx('top-content')}>
                <Top/>
            </div>
            <div className={cx('bottom-content')}>
                <Bottom />
            </div>
        </div>
    ) 
}

export default LeftContent;