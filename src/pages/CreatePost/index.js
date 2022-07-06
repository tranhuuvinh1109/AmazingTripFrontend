import classNames from 'classnames/bind';
import styles from './CreatePost.module.scss';
import { SlideShow, BlogAddressPost } from '../../components/Layouts/components';
import LeftContent from './LeftContent';
import getCookie from "../../hooks/getCookie"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import http from '../../http';

const cx = classNames.bind(styles);

function CreatePost() {
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
        <div className={cx('body-content')}>
            <div className={cx('left-content')}>
                <LeftContent /> 
            </div>
            <div className={cx('right-content')}>
                <div className={cx('slide-show')}>
                    <SlideShow />
                </div>
                <div className={cx('comment')}>
                    <h2> Bình luận gần đây </h2>
                    {/* <BlogAddressPost /> */}
                </div>
            </div>
        </div>
    );
}

export default CreatePost;