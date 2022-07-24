import { useNavigate } from 'react-router-dom';
import styles from './MenuNotification.module.scss';
import classNames from 'classnames/bind';
import { MessageContext } from '../../../../../context/MessageContext';
import { useContext } from 'react';

const cx = classNames.bind(styles);



const data = [
    {
        id: 1,
        address_name: 'Hội An',
        address_id: 1,
        type: 1,
        time: 'vài phút trước'
    },
    {
        id: 2,
        address_name: 'Đà nẵng',
        address_id: 2,
        type: 2,
        time: 'vài phút trước'
    },
    {
        id: 3,
        address_name: 'Quảng Ninh',
        address_id: 3,
        type: 2,
        time: 'vài phút trước'
    },
    {
        id: 4,
        address_name: 'Nghệ An',
        address_id: 4,
        type: 1,
        time: 'vài phút trước'
    },
    {
        id: 5,
        address_name: 'Hải Phòng',
        address_id: 4,
        type: 2,
        time: 'vài phút trước'
    },
    {
        id: 6,
        address_name: 'Hà Nội',
        address_id: 4,
        type: 2,
        time: 'vài phút trước'
    },
]

function MenuNotification() {
    const navigate = useNavigate();

    const {notification} = useContext(MessageContext);
    //console.log(notification);
    return (
        <div className={cx('noti-container')}>
            <h3 className={cx('title')}>Thông báo</h3>
            <ul className={cx('noti-content')}>
                {notification.length !== 0 ? (
                    notification.map((each) => (
                        <li
                            key={each.id}
                            className={cx('each-noti')}
                        >
                            <button 
                                className={cx('btn-noti')}
                                onClick={() => navigate(`/address/${each.address_id}`)}
                            >
                                {each.type === 1 ? (
                                    <>
                                        Địa điểm
                                        <span className={cx('address')}>
                                            {each.address_name}
                                        </span>
                                        vừa có giảm giá mới. 
                                        <span className={cx('sale')}>
                                            Hãy khám phá nào !!!
                                        </span>
                                        <br />
                                        <span className={cx('time')}>
                                            {each.time}
                                        </span>
                                    </>
                                ) : each.type===-1 ? (
                                    <>
                                        Bài viết của bạn ở
                                        <span className={cx('address')}>
                                            {each.address_name}
                                        </span>
                                        đã bị báo cáo 
                                        <span className={cx('report')}>
                                            vi phạm quy tắc cộng đồng !!!
                                        </span>
                                        <br />
                                        <span className={cx('time')}>
                                            {each.time}
                                        </span>
                                    </>
                                ): (<>
                                    Bạn
                                    <span className={cx('address')}>
                                        {each.address_name}
                                    </span>
                                    đã bị báo cáo 
                                    <span className={cx('report')}>
                                        do có hành vi không phù hợp !!!
                                    </span>
                                    <br />
                                    <span className={cx('time')}>
                                        {each.time}
                                    </span>
                                </>) }
                            </button>
                        </li>
                    ))
                ) : (
                    <h5 className={cx('empty-noti')}>Bạn không có thông báo nào !!!</h5>
                )}
            </ul>
        </div>
    );
}

export default MenuNotification;