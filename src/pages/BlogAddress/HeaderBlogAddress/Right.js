import React, {useState, useEffect} from 'react';
import classNames from 'classnames/bind';
import styles from './Right.module.scss';
import { Link, useParams } from 'react-router-dom';
import http from '../../../http';

const cx = classNames.bind(styles);

function Right() {
    const {id} = useParams();

    const [address, setAddress] = useState({});
    useEffect(() => {
        const fetch = async () => {
            const res = await http.get(`/address/` + id);
            setAddress(res.data.data);
        };
        fetch();
    }, [])
    return (
        <div className={cx('right')}>
            <div className={cx('btn-book')}>
                <button className={cx('btn')}><i className="fa-regular fa-bookmark"></i> Bookmark</button>
            </div>
            <div className={cx('btn-write')}>
                <button className={cx('btn')}>
                    <Link to={`/address/`+address.address_id+`/createBlog`} >
                        <i className="fa-solid fa-pen"></i> 
                        viết bài
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Right;