import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Left.module.scss';
import { useParams } from 'react-router-dom';
import http from '../../../http';
// const [address, setAddress] = useState();
// const [image, setImage] = useState();

const cx = classNames.bind(styles);

function Left() {

    const { id } = useParams();
    const [address, setAddress] = useState({
    });
    useEffect(() => {
        const fetch = async () => {
            const res = await http.get(`/address/` + id);
            setAddress(res.data.data);
        };
        fetch();
    }, [])


    return (
        <div className={cx('left')}>
            <div className={cx('address')}>
                <h2 className={cx('name')}>
                    {address.address_name}
                    <i className={cx('fa-solid fa-location-dot')}></i>
                    <span className={cx('avatar')}>
                        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/281896920_534554055067659_2103376413571668716_n.jpg?stp=dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=j7BNtyGXhXAAX_hRifl&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLnllXQKcQizy9OEzLQUonG7eViUgPq4ynxejsTjcQClQ&oe=62D02342"
                            alt="" className={cx('avt')} />
                    </span>
                </h2>
            </div>

            <div className={cx('star')}>
                <i className={cx('fa-solid fa-star')}></i>
                <i className={cx('fa-solid fa-star')}></i>
                <i className={cx('fa-solid fa-star')}></i>
                <i className={cx('fa-solid fa-star')}></i>
                <i className={cx('fa-solid fa-star')}></i>
                <span>{address.address_id}</span>
            </div>
        </div>
    )
}

export default Left;