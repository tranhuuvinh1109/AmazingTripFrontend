import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Top.module.scss';
// const [description, setDescription] = useState();

const cx = classNames.bind(styles);

function Top() {
    return (
        <div className={cx('center-left-top')}>
            <h3 className={cx('des')}>
                Mô tả
            </h3>
            <p>
                Phố cổ Hội An là một thành phố nổi tiếng của tỉnh Quảng Nam, một phố cổ giữ được gần như nguyên vẹn với hơn 1000 di tích kiến trúc . Phố cổ Hội An là một thành phố nổi tiếng của tỉnh Quảng Nam, một phố cổ giữ được gần như nguyên vẹn với hơn 1000 di tích kiến trúc. Phố cổ Hội An là một thành phố nổi tiếng của tỉnh Quảng Nam, một phố cổ giữ .... <span>Xem thêm</span>
            </p>
        </div>
    )
}

export default Top;