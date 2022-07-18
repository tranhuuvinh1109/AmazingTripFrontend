import { useContext } from 'react';
import { FaStar } from "react-icons/fa";
import classNames from 'classnames/bind';
import styles from './Left.module.scss';
import { BlogAddressContext } from '../BlogAddressContext';

const cx = classNames.bind(styles);

function Left() {
    const context = useContext(BlogAddressContext);
    const currentValue = parseInt(context.addressData.vote);
    const stars = Array(5).fill(0);
    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"
    };

    return (
        <div className={cx('left')}>
            <div className={cx('address')}>
                <h2 className={cx('name')}>{context.addressData.address_name}</h2>
                <i className={cx('fa-solid fa-location-dot')}></i>
                <span className={cx('avatar')}>
                    <img src={context.addressData?.avatar} className={cx('avt')} />
                </span>
            </div>

            <div className={cx('star')}>
                {stars.map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={20}
                            color={currentValue > index ? colors.orange : colors.grey}
                            style={{ marginRight: '5'}}
                        />
                    )
                })}
                <span className={cx('vote')}>{context.addressData?.vote?.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default Left;