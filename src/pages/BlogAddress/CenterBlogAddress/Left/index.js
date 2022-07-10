import React, { useState, useEffect } from 'react';
import styles from './LeftContent.module.scss';
import Bottom from './Bottom';
import Top from './Top';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import http from '../../../../http';

const cx = classNames.bind(styles);


function LeftContent() {
    return (
        <div className={cx('container')}>
            <div className={cx('top-content')}>
                <Top />
            </div>
            <div className={cx('bottom-content')}>
                <Bottom />
            </div>
        </div>
    ) 
}

export default LeftContent;