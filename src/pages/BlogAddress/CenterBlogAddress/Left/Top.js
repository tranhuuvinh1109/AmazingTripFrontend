import React, { useState, useParams , useEffect} from 'react';
import classNames from 'classnames/bind';
import styles from './Top.module.scss';
import http from '../../../../http';
 
// const [description, setDescription] = useState();

const cx = classNames.bind(styles);

function Top({address}) {
    return (
        <div className={cx('center-left-top')}>
            <h3 className={cx('des')}>
                Mô tả
            </h3>
            <p>
               {address.address_description}
            </p>
        </div>
    )
}

export default Top;