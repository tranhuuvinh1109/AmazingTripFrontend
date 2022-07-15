import { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import classNames from 'classnames/bind';
import styles from './UserPagePost.module.scss';
import Comments from './CommentBlog/Comments';
import getCookie from '../../../../hooks/getCookie';
import ReadMore from '../ReadMore';
import { toast } from 'react-toastify';
import { UserPageContext } from '../../../../pages/UserPage/UserPageContext';
import commentAddressApi from '../../../../api/commentAddressApi';

const cx = classNames.bind(styles);

function UserPagePost({ postData }) {
    const userData = JSON.parse(getCookie('userin'));
    const context = useContext(UserPageContext);
    const deleteBtnRef = useRef();

    const [showComment, setShowComment] = useState(false);
    const [showDelete, setShowDelete] = useState(false);


    const [value, setValue] = useState({
        blog_address_id: postData.blog_address_id,
        id_user: context.userData.id,
        comment_address_content: ''
    });

    const handleSendComment = async () => {
        console.log(value)
        try {
            const res = await commentAddressApi.post(value.blog_address_id, value);
            context.setCommentsBlog([...res.data]);
            setShowComment(true);
            setValue({...value, comment_address_content: ''}); 
        } catch (error) {
            console.log('Toang meo chay r loi cc ', error);
        }
    }

    const handleDelete = async () => {
        // try {
        //     context.handleResetPostData(postData.blog_address_id);
        //     blogAddressPostApi.delete(postData.blog_address_id);
        //     toast.warning('Bài viết đã bị xóa !!!', {
        //         toastId: 1,
        //     });
        // } catch (error) {
        //     console.log('Toang meo chay roi loi cc:', error)
        // }
    }

    // const handleLike = async () => {
    //     if(like)
    //     {
    //         try {
    //             await reactionGroupBlogApi.unReaction(postData.blog_id, userData.id);
    //             setLike(false);
    //             context.handleResetReactionCount(postData.blog_id, true, false, false);
    //         } catch (error) {
    //             console.log('Toang meo chay roi loi cc:', error)
    //         }
    //     }
    //     else 
    //     {
    //         const data = {
    //             blog_id: postData.blog_id,
    //             id_user: userData.id,
    //             reaction: '1'
    //         }
    //         try {
    //             await reactionGroupBlogApi.post(data);
    //             const status = dislike;
    //             setLike(true);
    //             setDislike(false);
    //             context.handleResetReactionCount(postData.blog_id, true, true, status);
    //         } catch (error) {
    //             console.log('Toang meo chay roi loi cc:', error)
    //         }
    //     }
    // }

    // const handleDislike = async () => {
    //     if(dislike)
    //     {
    //         try {
    //             await reactionGroupBlogApi.unReaction(postData.blog_id, userData.id);
    //             setDislike(false);
    //             context.handleResetReactionCount(postData.blog_id, false, false, false);
    //         } catch (error) {
    //             console.log('Toang meo chay roi loi cc:', error)
    //         }
    //     }
    //     else 
    //     {
    //         const data = {
    //             blog_id: postData.blog_id,
    //             id_user: userData.id,
    //             reaction: '0'
    //         }
    //         try {
    //             reactionGroupBlogApi.post(data);
    //             const status = like;
    //             setDislike(true);
    //             setLike(false);
    //             context.handleResetReactionCount(postData.blog_id, false, true, status);
    //         } catch (error) {
    //             console.log('Toang meo chay roi loi cc:', error)
    //         }
    //     }
    // }

    useEffect(() => {
        const handler = (e) => {
            if(!deleteBtnRef.current.contains(e.target))
                setShowDelete(false);
        }

        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })


    return (
        <div className={cx('feedback-blog')}>
            <div className={cx('user-post')}>
                <div className={cx('user-infor')}>
                    <div>
                        <img src={context.userData ? context.userAva : ''} alt=""
                        className={cx('user-avt')} />
                        <h4 className={cx('m-0')}>
                            {context.userData?.nickname}
                            ở
                            <Link 
                                className={cx('address-post')}
                                to={`/address/${postData.address_id}`}
                            >
                                {postData?.address_name}
                            </Link>  
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
                <div className={cx('post-star')}>
                    <i className={cx('fa-solid fa-star')}></i>
                    <i className={cx('fa-solid fa-star')}></i>
                    <i className={cx('fa-solid fa-star')}></i>
                    <i className={cx('fa-solid fa-star')}></i>
                    <i className={cx('fa-solid fa-star')}></i>
                </div>
            </div>
            <div className={cx('post-container')}>
                <div className={cx('post-content')}>
                    <ReadMore limit={400}>{postData.blog_address_content}</ReadMore>
                    <div className={cx('post-img')}>
                        {/* <img src="https://images.vietnamtourism.gov.vn/vn/images/2021/hoianvna.jpg" alt="" /> */}
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
                                <img 
                                    src={context.userAva}
                                    alt="A image" 
                                    className={cx('user-avatar')}
                                />
                            </div>
                            <div className={cx('input-comment')}>
                                <input
                                    value={value.comment_address_content}
                                    type="text"
                                    placeholder="Viết bình luận ..."
                                    onChange={(e) =>{
                                        setValue({...value, comment_address_content: e.target.value})
                                    }}
                                />
                                <button
                                    onClick={() => handleSendComment()}
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

export default UserPagePost;