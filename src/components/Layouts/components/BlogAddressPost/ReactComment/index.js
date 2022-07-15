import { Fragment, useState, useEffect, useContext } from 'react';
import styles from './ReactComment.module.scss';
import classNames from 'classnames/bind';
import Comment from './Comment';
import { CommentContext } from './CommentContext';
import { BlogAddressContext } from '../../../../../pages/BlogAddress/BlogAddressContext';
import commentAddressApi from '../../../../../api/commentAddressApi';
import getCookie from '../../../../../hooks/getCookie';
import reactionAddressBlogApi from '../../../../../api/reactionAddressBlogApi';

const cx = classNames.bind(styles);

const ReactComment = ({ postData }) => {
    const userData = JSON.parse(getCookie('userin'));
    const context = useContext(BlogAddressContext);
    const commentContext = useContext(CommentContext);

    const [showComment, setShowComment] = useState(false);

    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);

    const [value, setValue] = useState({
        blog_address_id: postData.blog_address_id,
        id_user: userData.id,
        comment_address_content: ''
    });

    // send user comment
    const sendComment = async () => {
        try {
            const res = await commentAddressApi.post(value.blog_address_id, value);
            commentContext.setCommentsBlog([...res.data]);
            context.handleResetCommentCount(postData.blog_address_id, true);
            setShowComment(true);
            setValue({...value, comment_address_content: ''}); 
        } catch (error) {
            console.log('Toang meo chay r loi cc ', error);
        }
    }

    const handleLike = async () => {
        if(like)
        {
            try {
                await reactionAddressBlogApi.unReaction(postData.blog_address_id, userData.id);
                setLike(false);
                context.handleResetReactionCount(postData.blog_address_id, true, false, false);
            } catch (error) {
                console.log('Toang meo chay roi loi cc:', error)
            }
        }
        else 
        {
            const data = {
                blog_address_id: postData.blog_address_id,
                id_user: userData.id,
                reaction: '1'
            }
            try {
                await reactionAddressBlogApi.post(data);
                const status = dislike;
                setLike(true);
                setDislike(false);
                context.handleResetReactionCount(postData.blog_address_id, true, true, status);
            } catch (error) {
                console.log('Toang meo chay roi loi cc:', error)
            }
        }
    }

    const handleDislike = async () => {
        if(dislike)
        {
            try {
                await reactionAddressBlogApi.unReaction(postData.blog_address_id, userData.id);
                setDislike(false);
                context.handleResetReactionCount(postData.blog_address_id, false, false, false);
            } catch (error) {
                console.log('Toang meo chay roi loi cc:', error)
            }
        }
        else 
        {
            const data = {
                blog_address_id: postData.blog_address_id,
                id_user: userData.id,
                reaction: '0'
            }
            try {
                reactionAddressBlogApi.post(data);
                const status = like;
                setDislike(true);
                setLike(false);
                context.handleResetReactionCount(postData.blog_address_id, false, true, status);
            } catch (error) {
                console.log('Toang meo chay roi loi cc:', error)
            }
        }
    }

    // Check CurrentUser like/dislike status
    useEffect(() => {
        const checkReaction = async () => {
            const res = await reactionAddressBlogApi.checkReaction(postData.blog_address_id, userData.id);
            if(res.status == 400)
            {
                setLike(false);
                setDislike(false);
            }
            if(res.status == 200)
            {
                if(res.data.reaction == '1')
                    setLike(true);
                else
                    setDislike(true);
            }
        }

        checkReaction();
    }, [])

    return (
        <Fragment>
            <div className={cx('post-reaction')}>
                <div className={cx('d-flex')}>
                    <div className={cx('d-flex align-items-center')}>
                        <button
                            className={cx('btn-reaction')}
                            onClick={() => handleLike()}
                        >
                            <i className={like ? cx('fa-solid fa-thumbs-up') : cx('fa-regular fa-thumbs-up')} />
                        </button>
                        <span className={cx('sum-like ms-1')}>
                            {postData?.likeCount}
                        </span>
                    </div>
                    <div className={cx('d-flex align-items-center ms-3')}>
                        <button
                            className={cx('btn-reaction')}
                            onClick={() => handleDislike()}
                        >
                            <i className={dislike ? cx('fa-solid fa-thumbs-down') : cx('fa-regular fa-thumbs-down')} />
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
                            src={userData.avatar}
                            alt="A image"
                            className={cx('user-avatar')}
                        />
                    </div>
                    <div className={cx('input-comment')}>
                        <input
                            value={value.comment_address_content}
                            type="text"
                            placeholder="Viết bình luận ..."
                            onChange={(e) => {
                                setValue({ ...value, comment_address_content: e.target.value })
                            }}
                        />
                        <button
                            onClick={() => sendComment()}
                            className={cx('send-comment')}
                        >
                            <i className="h4 fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
                {showComment && (
                    <div className='listComments mt-3'>
                        <div className="row  d-flex justify-content-center">
                            <div className="col-md-12 mt-3">
                                {
                                    commentContext.commentsBlog?.map((each) => (
                                        <Comment comment={each} key={each.comment_blog_id} />
                                    )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    )
}

export default ReactComment;
