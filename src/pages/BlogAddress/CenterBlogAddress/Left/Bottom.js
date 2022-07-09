import React, { useState, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Bottom.module.scss';
import { BlogAddressContext } from '../../BlogAddressContext';

const cx = classNames.bind(styles);

// const [start, setStart] = useState();
// const [finish, setFinish] = useState();
// const [discount, setDiscount] = useState();
// const [quantity, setQuantity] = useState();
// const [registed, setRegisted] = useState();


function Bottom() {

    const formContext = useContext(BlogAddressContext)

    return (
        <div className={cx('center-left-bottom')}>
            <h4>
                Từ ngày <span className={cx('day-start')}>09/11/2020</span> tới ngày<span className={cx('day-end')}> 22/11/2022</span>
            </h4>
            <p className={cx('block-discount')}>
                Giảm giá tới <span className={cx('discount')}> 30% </span>
            </p>
            <p className={cx('dess2')}>
                <span className={cx('quantity')}>
                    50
                </span> quý khách đầu tiên
            </p>
            <div className={cx('sub')}>
                <h5 className={cx('submit')}>
                    Số lượng đã đăng ký: 
                    <span className={cx('sb')}>
                        37/50
                    </span>
                </h5>
                <button 
                    onClick={ formContext.toggleForm }
                    className={cx('btn-register')}
                >
                    Đăng ký
                </button>
            </div>
        </div>
    )
}

export default Bottom;