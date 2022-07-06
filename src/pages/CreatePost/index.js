import classNames from 'classnames/bind';
import styles from './CreatePost.module.scss';
import { SlideShow, BlogAddressPost } from '../../components/Layouts/components';
import LeftContent from './LeftContent';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import blogAddressPostApi from '../../api/blogAddressPostApi';

const cx = classNames.bind(styles);

function CreatePost() {
    const {id} = useParams();
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const fetchPostList = async () => {
            try {
                const res = await blogAddressPostApi.get(id);
                setPostData([res.data]) 
            } catch (error) {
                console.log('Toang meo chay r loi cc:  ', error)
            }
        }

        fetchPostList();
    },[])

    return ( 
        <div className={cx('body-content')}>
            {console.log(postData[0])}
            <div className={cx('left-content')}>
                <LeftContent /> 
            </div>
            <div className={cx('right-content')}>
                <div className={cx('slide-show')}>
                    <SlideShow />
                </div>
                <div className={cx('comment')}>
                    <h2> Bình luận gần đây </h2>
                    { postData[0] && <BlogAddressPost postData={postData[0]}/>}
                </div>
            </div>
        </div>
    );
}

export default CreatePost;