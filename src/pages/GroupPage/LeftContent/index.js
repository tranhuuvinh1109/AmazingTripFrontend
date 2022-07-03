import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './LeftContent.module.scss';
import images from "../../../assets/images";

const cx = classNames.bind(styles);

function LeftContent() {
    return (  
        <div className={cx('sticky-side-bar')}>
            <h2 className={cx('side-title')}>
                Thông tin nhóm
            </h2>
            <ul className={cx('user-inf')}>
                <li className={cx('d-flex align-items-start justify-content-start')}>
                    <i className={cx('fa-solid fa-user-check')}></i>
                    <div className={cx('leader-inf')}>
                        <p>Nhóm trưởng</p>
                        <img src={images.userAvatar} alt='A image'/>
                        <label htmlFor=''>User_name</label>
                    </div>
                </li>
                <li className={cx('d-flex align-items-start justify-content-start')}>
                    <i className={cx('fa-solid fa-location-arrow me-2')}></i>
                    <p> Điểm đến xxx, xxx, xxx, xxx, Ha Noi</p>
                </li>
                <li className={cx('d-flex align-items-start justify-content-start')}>
                    <i className={cx('fa-solid fa-cake-candles me-2')}></i>
                    <p>
                        Đã được tạo vào
                        <span style={{ color: 'orange' }}> 01/01/2022</span>
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default LeftContent;