import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './BlogAddressPost.module.scss';
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
                                    <i class="fa-regular fa-thumbs-up"></i>
                                </button>
                                <span className={cx('sum-like ms-1')}>100</span>
                            </div>
                            <div className={cx('d-flex align-items-center ms-3')}>  
                                <button className={cx('btn-reaction')}>
                                    <i class="fa-regular fa-thumbs-down"></i>
                                </button>
                                <span className={cx('sum-dislike ms-1')}>15</span>
                            </div> 
                        </div>

                        <span className={cx('sum-comment')}>
                            20 Bình luận
                        </span>
                    </div>
                    <div className={cx('user-comment')}>
                        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/281896920_534554055067659_2103376413571668716_n.jpg?stp=dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=j7BNtyGXhXAAX_hRifl&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLnllXQKcQizy9OEzLQUonG7eViUgPq4ynxejsTjcQClQ&oe=62D02342"
                            alt="" className={cx('user-avt')} />
                        <input type="text" className="write-comment" placeholder="Viết bình luận ..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogAddressPost;