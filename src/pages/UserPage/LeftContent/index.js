import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './LeftContent.module.scss';

const cx = classNames.bind(styles);

function LeftContent() {
    return (  
        <div className={cx('sticky-side-bar')}>
            <h2 className={cx('side-title')}>
                Về tôi
            </h2>
            <ul className={cx('user-inf')}>
                <li className={cx('d-flex align-items-start justify-content-start')}>
                    <i className={cx('fa-solid fa-cake-candles me-2')}></i>
                    <p>01/01/2022</p>
                </li>
                <li className={cx('d-flex align-items-start justify-content-start')}>
                    <i className={cx('fa-solid fa-location-arrow me-2')}></i>
                    <p>xxx, xxx, xxx, xxx, Ha Noi</p>
                </li>
                <li className={cx('d-flex align-items-start justify-content-start')}>
                    <i className={cx('fa-solid fa-user-check')}></i>
                    <p>Thanh vien gia dinh
                        
                        <span className={cx('web-logo')}> AmazingTrip </span> 
                        tu 
                        
                        <span> 01/01/2022</span>
                    </p>
                </li>
                <li>
                    <Link to='/user_edit' className={cx('d-flex align-items-start justify-content-start')}>
                        <i className={cx('fa-solid fa-user-pen')}></i>
                        <p>Chinh sua thong tin</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default LeftContent;