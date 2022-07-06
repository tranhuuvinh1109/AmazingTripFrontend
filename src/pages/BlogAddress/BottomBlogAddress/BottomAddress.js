import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './BottomAddress.module.scss';
import { BlogAddressPost } from '../../../components/Layouts/components';
import blogAddressPostApi from '../../../api/blogAddressPostApi';

const cx = classNames.bind(styles);

function BottomAddress() {
    const {id} = useParams();
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const fetchPostList = async () => {
            try {
                const res = await blogAddressPostApi.get(id);
                setPostData(res.data) 
            } catch (error) {
                console.log('Toang meo chay r loi cc:  ', error)
            }
        }

        fetchPostList();
    },[])

    return (
        <div className="bottom">
            {postData.map((each, index) => {
                return (
                    each ? (
                    <Fragment key={each.blog_address_id}>
                        <BlogAddressPost postData={each} key={each.blog_address_id}/>
                    </Fragment>
                    ) : (
                        <div key={index} className={cx('empty-area')}>
                            <h1>
                                Chưa có bình luận nào cả... 
                                <br/>
                                Hãy là người đầu tiên đánh giá về địa điểm này
                            </h1>
                            <button>
                                <Link to={`/address/`+id+`/createBlog`} >
                                    <i className="fa-solid fa-pen"></i> 
                                    Viết bài
                                </Link>
                            </button>
                        </div>
                    )
                )
            })}
        </div>
    )
}

export default BottomAddress;