import classNames from "classnames/bind";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from './AddressItem.module.scss';
import getImage from '../../../../hooks/getImage';

const cx = classNames.bind(styles);


function AddressItem({ data }) {
    return (
        <Link to={`/address/${data.address_id}`} className={cx('wrapper')}>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>
                        {data?.address_name}
                    </span>
                </p>
                <span className={cx('username')}>
                    {data?.vote.toFixed(2)}
                </span>
            </div>
        </Link>
    );
}

export default AddressItem;