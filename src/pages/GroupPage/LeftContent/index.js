import { useContext } from "react";
import classNames from "classnames/bind";
import styles from './LeftContent.module.scss';
import { GroupPageContext } from "../GroupPageContext";

const cx = classNames.bind(styles);

function LeftContent() {
    const context = useContext(GroupPageContext);

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
                        <img src={context.groupData ? context.leadAva : ''} alt='A image'/>
                        <label htmlFor=''>{context.groupData ? context.groupData.admin_name : ''}</label>
                    </div>
                </li>
                <li className={cx('d-flex align-items-start justify-content-start')}>
                    <i className={cx('fa-solid fa-location-arrow me-2')}></i>
                    <p> {context.groupData ? context.groupData.address : ''}</p>
                </li>
                <li className={cx('d-flex align-items-start justify-content-start')}>
                    <i className={cx('fa-solid fa-cake-candles me-2')}></i>
                    <p>
                        Đã được tạo vào
                        <span style={{ color: 'orange' }}> 
                            { context.groupData ? 
                                new Date(context.groupData.created_at).toLocaleDateString() 
                                : '' 
                            }
                        </span>
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default LeftContent;