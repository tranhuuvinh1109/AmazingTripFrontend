import { useContext } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './LeftContent.module.scss';
import { UserPageContext } from "../UserPageContext";

const cx = classNames.bind(styles);

function LeftContent() {    
    const context = useContext(UserPageContext);

    return (  
        <div className={cx('sticky-side-bar')}>
            <h2 className={cx('side-title')}>
                Về tôi
            </h2>
            <ul className={cx('user-inf')}>
                <li className={cx('d-flex align-items-start justify-content-start')}>
                    <i className={cx('fa-solid fa-cake-candles me-2')}></i>
                    <p>
                        { context.userData ? 
                            new Date(context.userData.birthday).toLocaleDateString() 
                            : '' 
                        }
                    </p>
                </li>
                <li className={cx('d-flex align-items-start justify-content-start')}>
                    <i className={cx('fa-solid fa-location-arrow me-2')}></i>
                    <p>{context.userData?.address}</p>
                </li>
                <li className={cx('d-flex align-items-start justify-content-start')}>
                    <i className={cx('fa-solid fa-user-check')}></i>
                    <p>Thành viên gia đình
                        
                        <span className={cx('web-logo')}> AmazingTrip </span> 
                        từ
                        
                        <span> 
                            { context.userData ? 
                                new Date(context.userData.created_at).toLocaleDateString() 
                                : '' 
                            }
                        </span>
                    </p>
                </li>
                <li>
                    <Link to={`/user_edit/${context.userData?.id}`} className={cx('d-flex align-items-start justify-content-start')}>
                        <i className={cx('fa-solid fa-user-pen')}></i>
                        <p>Chinh sua thong tin</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default LeftContent;