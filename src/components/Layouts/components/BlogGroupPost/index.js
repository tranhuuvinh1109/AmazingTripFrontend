import { useState, useEffect, useRef, useContext } from 'react';
import moment from 'moment';
import classNames from 'classnames/bind';
import styles from './BlogAddressPost.module.scss';
import Comments from './CommentBlog/Comments';
import getCookie from '../../../../hooks/getCookie';
import ReadMore from '../ReadMore';
import blogGroupApi from '../../../../api/blogGroupApi';
import { toast } from 'react-toastify';
import { GroupPageContext } from '../../../../pages/GroupPage/GroupPageContext';
import commentGroupApi from '../../../../api/commentGroupApi';
import getImage from '../../../../hooks/getImage';

const cx = classNames.bind(styles);

function BlogGroupPost({ postData }) {
    const userData = JSON.parse(getCookie('userin'));
    const context = useContext(GroupPageContext);
    const deleteBtnRef = useRef();

    const [ava, setAva] = useState('');
    const [blogImg, setBlogImg] = useState('');

    const [showComment, setShowComment] = useState(false);
    const [showDelete, setShowDelete] = useState(false);


    const [value, setValue] = useState({
        blog_id: postData.blog_id,
        id_user: userData.id,
        comment_blog_content: ''
    });

    const sendComment = async () => {
        if(value.comment_blog_content !== '')
            try {
                const res = await commentGroupApi.post(value);
                context.setCommentsBlog([...res.data]);
                setShowComment(true);
                setValue({...value, comment_blog_content: ''}); 
            } catch (error) {
                console.log('Toang meo chay r loi cc ', error);
            }
    }

    const handleDelete = async () => {
        try {
            context.handleResetPostData(postData.blog_id);
            blogGroupApi.delete(postData.blog_id);
            toast.warning('Bài viết đã bị xóa !!!');
        } catch (error) {
            console.log('Toang meo chay roi loi cc:', error)
        }
    }

    useEffect(() => {
        const handler = (e) => {
            if(!deleteBtnRef?.current.contains(e.target))
                setShowDelete(false);
        }

        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    useEffect(() => {
        const getImageUrl = async () => {
            if(postData.avatar !== null)
            {
                const res = await getImage(postData.avatar);
                setAva(res);
            }
            if(postData.blog_image !== null)
            {
                const res2 = await getImage(postData.blog_image);
                setBlogImg(res2);
            }
        }
        getImageUrl();
    }, [])

    return (
        <div className={cx('feedback-blog')}>
            <div className={cx('user-post')}>
                <div className={cx('user-infor')}>
                    <div>
                        <img 
                            src={ava}
                            alt="A image"
                            className={cx('user-avt')} 
                        />
                        <h4 className={cx('m-0')}>
                            {postData?.nickname}
                            <br/>
                            <span className={cx('date-post')}>
                                {moment(postData.created_at).format('D [tháng] M [năm] YYYY')}
                            </span>                    
                        </h4>
                    </div>
                    <div
                        ref={deleteBtnRef}
                    >
                        <button
                            onClick={() => setShowDelete(!showDelete)}
                            className={cx('btn-more')}
                        >
                            <i className={cx('fa-solid fa-ellipsis icon-more')}></i>
                        </button>
                        {showDelete && (
                            <div 
                                className={cx('delete-area')}
                            >
                                <button onClick={() => handleDelete()}>
                                    Xóa bài viết
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={cx('post-container')}>
                <div className={cx('post-content')}>
                    <h1 
                        className={cx('blog-title')} 
                    >
                            {postData.blog_title}
                    </h1>
                    <ReadMore limit={400}>
                        {postData.blog_content}
                    </ReadMore>
                    <div className={cx('post-img')}>
                        { blogImg && 
                            <img 
                                src={blogImg} 
                                alt="A image"
                                className={cx('blog-image')} 
                            />
                        }
                    </div>
                    <div className={cx('post-reaction')}>
                        <div className={cx('d-flex')}>
                            <div className={cx('d-flex align-items-center')}>
                                <button className={cx('btn-reaction')}>
                                    <i className={cx('fa-regular fa-thumbs-up')}/>
                                </button>
                                <span className={cx('sum-like ms-1')}>
                                    {postData?.likeCount}
                                </span>
                            </div>
                            <div className={cx('d-flex align-items-center ms-3')}>  
                                <button className={cx('btn-reaction')}>
                                    <i className={ cx('fa-regular fa-thumbs-down')}/>
                                </button>
                                <span className={cx('sum-dislike ms-1')}>
                                    {postData?.dislikeCount}
                                </span>
                            </div> 
                        </div>

                        <span 
                            className={cx('sum-comment')}
                            onClick={() => setShowComment(!showComment)}
                        >
                            {postData?.commentCount} Bình luận
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
                                    value={value.comment_blog_content}
                                    type="text"
                                    placeholder="Viết bình luận ..."
                                    onChange={(e) =>{
                                        setValue({...value, comment_blog_content: e.target.value})
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
                        { showComment && <Comments blog_id={postData.blog_id} /> }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogGroupPost;