import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './BlogAddressPost.module.scss';
import Comments from './CommentBlog/Comments';
import getCookie from '../../../../hooks/getCookie';

const cx = classNames.bind(styles);

function BlogAddressPost({ postData }) {
    const userData = JSON.parse(getCookie('userin'));

    const [showComment, setShowComment] = useState(false);
    const [value, setValue] = useState('');
    const raw = JSON.stringify({
        "blog_address_id": postData.blog_address_id,
        "id_user": userData.id,
        "comment_address_content": value,
    })
    const obj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: raw,
        redirect: 'follow'
    }

    function sendComment() {
        console.log(raw);
        fetch('http://127.0.0.1:8000/api/createCommentBlog', obj)
        .then((response) => { 
            return response.json() 
        })
        .then((responseJSON) => { 
            setShowComment(true);
            setValue(''); 
        });
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
                        {postData.blog_address_content}
                    </p>
                    <div className={cx('post-img')}>
                        {/* <img src="https://images.vietnamtourism.gov.vn/vn/images/2021/hoianvna.jpg" alt="" /> */}
                    </div>
                    <div className={cx('post-reaction')}>
                        <div className={cx('d-flex')}>
                            <div className={cx('d-flex align-items-center')}>
                                <button className={cx('btn-reaction')}>
                                    <i className={cx('fa-regular fa-thumbs-up')}/>
                                </button>
                                <span className={cx('sum-like ms-1')}>100</span>
                            </div>
                            <div className={cx('d-flex align-items-center ms-3')}>  
                                <button className={cx('btn-reaction')}>
                                    <i className={ cx('fa-regular fa-thumbs-down')}/>
                                </button>
                                <span className={cx('sum-dislike ms-1')}>15</span>
                            </div> 
                        </div>

                        <span 
                            className={cx('sum-comment')}
                            onClick={() => setShowComment(!showComment)}
                        >
                            20 Bình luận
                        </span>
                    </div>

                    <div className='comments'>
                        <div className={cx('user-comment')}>
                            <div className=''>
                                <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/281896920_534554055067659_2103376413571668716_n.jpg?stp=dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=j7BNtyGXhXAAX_hRifl&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLnllXQKcQizy9OEzLQUonG7eViUgPq4ynxejsTjcQClQ&oe=62D02342"
                                    alt="" className='rounded-circle d-inline' width={50} />
                            </div>
                            <div className={cx('input-comment')}>
                                <input
                                    value={value}
                                    type="text"
                                    placeholder="Viết bình luận ..."
                                    onChange={(e) =>{
                                        setValue(e.target.value)
                                    }}
                                />
                                <button
                                    onClick={sendComment}
                                    className={cx('send-comment')}
                                >
                                    <i className="h4 fa-solid fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                        { showComment && <Comments blog_address_id={postData.blog_address_id} /> }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogAddressPost;