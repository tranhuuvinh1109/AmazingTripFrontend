import React, { useState, useEffect } from 'react';
import styles from './LeftContent.module.scss';
import Bottom from './Bottom';
import Top from './Top';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import http from '../../../../http';

const cx = classNames.bind(styles);


function LeftContent() {
    const {id} = useParams();
    const [address, setAddress] = useState({
    });
    useEffect(() => {
        const fetch = async () => {
            const res = await http.get(`/address/` + id);
            setAddress(res.data.data);
        };
        fetch();
    }, [])

    return (
        <div className={cx('container')}>
            <div className={cx('top-content')}>
                <Top address={address}/>
            </div>
            <div className={cx('bottom-content')}>
                <Bottom />
            </div>
        </div>
    ) 
}

export default LeftContent;