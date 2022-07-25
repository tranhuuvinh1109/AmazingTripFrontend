import { useState, useEffect, useRef, useContext } from 'react';
import { toast } from 'react-toastify';
import Tippy from '@tippyjs/react';
import moment from 'moment';
import { FaStar } from "react-icons/fa";
import classNames from 'classnames/bind';
import styles from './BlogAddressPost.module.scss';
import ReadMore from '../ReadMore';
import { BlogAddressContext } from '../../../../pages/BlogAddress/BlogAddressContext';
import { CommentContext } from './ReactComment/CommentContext';
import blogAddressPostApi from '../../../../api/blogAddressPostApi';
import commentAddressApi from '../../../../api/commentAddressApi';
import getImage from '../../../../hooks/getImage';
import images from '../../../../assets/images';
import ReactComment from './ReactComment';
import Avatar from '../Avatar';
import { MessageContext } from '../../../../context/MessageContext';
import { db } from '../../../../firebase';
import firebase from '../../../../firebase';
import getCookie from '../../../../hooks/getCookie';
import { UserPageContext } from '../../../../pages/UserPage/UserPageContext';

const cx = classNames.bind(styles);

function BlogAddressPost({ postData, slideShow }) {
    const context = useContext(BlogAddressContext);
    const commentContext = useContext(CommentContext);
    const deleteBtnRef = useRef();

    const [showDelete, setShowDelete] = useState(false);
    const currentValue = parseInt(postData.blog_address_vote);

    const [ava, setAva] = useState('');
    const [blogImg, setBlogImg] = useState('');
    const stars = Array(5).fill(0);

    const userContext = useContext(UserPageContext);

    const avatarData = {
        avatar: ava,
        nickname: postData.nickname,
        id: postData.id
    };

    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"
    };

    const handleDelete = async () => {
        try {
            context.handleResetPostData(postData.blog_address_id);
            blogAddressPostApi.delete(postData.blog_address_id);
            toast.warning('Bài viết đã bị xóa !!!', {
                toastId: 1,
            });
        } catch (error) {
            console.log('Toang meo chay roi loi cc:', error)
        }
    }

    const handleReport = async () => {
        try {
            let resJSON ;
            const res = getCookie('userin');
            if(res)
                resJSON = JSON.parse(res)
            console.log(postData);
            const query = db.collection('notifications');
            //console.log(userContext.userData)
            query.add({
                user1: resJSON.id,
                user2: [postData.id],
                user1name: resJSON.nickname,
                user2name: postData.nickname,
                user1ava: resJSON.avatar,
                user2ava: postData.avatar,
                address_id: context.addressData?.address_id,
                address_name: context.addressData?.address_name,
                blog_address_id: postData.blog_address_id, 
                content: 'Bài viết bị báo cáo',
                type: -1,
                seen: 0,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
            toast.warning('Bài viết về địa điểm đã bị báo cáo !!!', {
                toastId: 1,
            });
        } catch (error) {
            
        }
    }

    // get Image url from firebase
    useEffect(() => {
        const getImageUrl = async () => {
            if (postData.avatar !== null) {
                const res = await getImage(postData.avatar);
                setAva(res);
            }
            if (postData?.blog_address_image !== null) {
                const res2 = await getImage(postData.blog_address_image);
                setBlogImg(res2);
            }
        }

        getImageUrl();
    }, [])

    // Get Comment Data
    useEffect(() => {
        const fetchCommentList = async () => {
            if (slideShow !== undefined && !slideShow) {
                try {
                    const res = await commentAddressApi.get(postData.blog_address_id);
                    commentContext.setCommentsBlog([...commentContext.commentsBlog, ...res.data]);
                } catch (error) {
                    console.log('Toang meo chay r loi cc ', error)
                }

            }
        }
        fetchCommentList();
    }, []);

    return (
        <div className={cx('feedback-blog')}>
            <div className={cx('user-post')}>
                <div className={cx('user-infor')}>
                    <div className={cx('inf')}>
                        <Avatar
                            src={ava || images.defaultava}
                            size={'50px'}
                            userData={{
                                id: postData.id,
                                nickname: postData.nickname,
                                avatar: ava
                            }}
                            placement={'right'}
                        />
                        <h4 className={cx('m-0')}>
                            {postData?.nickname}
                            <br />
                            <span className={cx('date-post')}>
                                {moment(postData.created_at).format('D [tháng] M [năm] YYYY')}
                            </span>
                        </h4>
                    </div>
                    <Tippy
                        theme={'light'}
                        interactive={true}
                        placement={'bottom'}
                        animation={'fade'}
                        arrow={true}
                        allowHTML={true}
                        trigger={'click'}
                        content={(
                            <div className={cx('delete-area')}>
                                <button onClick={() => handleReport()}>
                                    Báo cáo bài viết
                                </button>
                                <button onClick={() => handleDelete()}>
                                    Xóa bài viết
                                </button>
                            </div>
                        )}
                    >
                        <button className={cx('btn-more')} >
                            <i className={cx('fa-solid fa-ellipsis icon-more')}></i>
                        </button>
                    </Tippy>
                </div>
                <div style={{ display: 'flex' }}>
                    {stars.map((_, index) => {
                        return (
                            <FaStar
                                key={index}
                                size={20}
                                color={currentValue > index ? colors.orange : colors.grey}
                                style={{ marginRight: '5' }}
                            />
                        )
                    })}
                </div>
            </div>
            <div className={cx('post-content')}>
                <ReadMore limit={200}>{postData.blog_address_content}</ReadMore>
                <div className={cx('post-img')}>
                    {blogImg &&
                        <img
                            src={blogImg}
                            alt="A image"
                            className={cx('blog-image')}
                        />
                    }
                </div>

                <ReactComment postData={postData} />
            </div>
        </div>
    )
}

export default BlogAddressPost;