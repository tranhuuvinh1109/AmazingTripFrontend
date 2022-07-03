import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './BlogAddressPost.module.scss';
import Comments from '../CommentBlog/Comments';
// const [avatarUser, setAvatarUser] = useState();
// const [username, setUsername] = useState();
// const [datePost, setDatePost] = useState();
// const [star, setStar] = useState();
// const [title, setTitle] = useState();
// const [image, setImage] = useState();
// const [like, setLike] = useState();
// const [dislike, setDislike] = useState();
// const [comment, setComment] = useState();

const cx = classNames.bind(styles);

function BlogAddressPost() {
    const [state, setState] = useState(-1) // dang la gia dinh vi chua co api;
    function setUpReaction() {
        if(state == 1) {
            setState(-1);
        }
        else {
            setState(1);
        }
        //console.log(state);
    }
    function setDownReaction() {
        if(state == 0) {
            setState(-1);
        }
        else{
            setState(0);
        }
        //console.log(state);
    }
    return (
        <div className={cx('feedback-blog')}>
            <div className={cx('user-post')}>
                <div className={cx('user-infor')}>
                    <img src="https://vnn-imgs-f.vgcloud.vn/2022/02/26/10/ronaldo-26.jpeg" alt=""
                    className={cx('user-avt')} />
                    <h4 className={cx('m-0')}>
                        Ronaldo
                        <br/>
                        <span className={cx('date-post')}>
                            6 tháng 6 năm 2022
                        </span>                    
                    </h4>
                </div>
                <i className={cx('fa-solid fa-ellipsis icon-more')}></i>
            </div>
            <div className={cx('post-container')}>
                <div className={cx('post-star')}>
                    <i className={cx('fa-solid fa-star')}></i>
                    <i className={cx('fa-solid fa-star')}></i>
                    <i className={cx('fa-solid fa-star')}></i>
                    <i className={cx('fa-solid fa-star')}></i>
                    <i className={cx('fa-solid fa-star')}></i>
                </div>
                <div className={cx('post-content')}>
                    <p className={cx('post-title')}>
                        Hội an là địa điểm tham quan du lịch tuyệt vời, với những ngôi nhà cổ sơn màu vàng .
                        Khung cảnh vẫn giữ nét cổ xưa, ẩm thực với những quán gà nổi tiếng.
                    </p>
                    <div className={cx('post-img')}>
                        <img src="https://images.vietnamtourism.gov.vn/vn/images/2021/hoianvna.jpg" alt="" />
                    </div>
                    <div className={cx('post-reaction')}>
                        <div className={cx('d-flex')}>
                            <div className={cx('d-flex align-items-center')}>
                                <button className={cx('btn-reaction')}>
                                    <i className={state != 1 ? 'fa-regular fa-thumbs-up' : 'text-primary fa-regular fa-thumbs-up'} 
                                    onClick={(e)=>{setUpReaction(); 
                                        fetch('http://127.0.0.1:8000/api/reactBlog', {
                                            method: 'POST',
                                            headers: {
                                                "Content-Type": "application/json",
                                            },
                                            body: JSON.stringify({
                                                "blog_id": 1,
                                                "id_user": 2,
                                                "reaction": state
                                            }),
                                            redirect: 'follow'
                                        }).then(response => {return response.json()}).then(responseJSON=>{console.log(responseJSON)})}}></i>
                                </button>
                                <span className={cx('sum-like ms-1')}>100</span>
                            </div>
                            <div className={cx('d-flex align-items-center ms-3')}>  
                                <button className={cx('btn-reaction')}>
                                    <i className={state != 0 ? 'fa-regular fa-thumbs-down' : 'text-primary fa-regular fa-thumbs-down'} onClick={(e)=>{setDownReaction()}}></i>
                                </button>
                                <span className={cx('sum-dislike ms-1')}>15</span>
                            </div> 
                        </div>

                        <span className={cx('sum-comment')}>
                            20 Bình luận
                        </span>
                    </div>
                    <Comments />
                </div>
            </div>
        </div>
    )
}

export default BlogAddressPost;