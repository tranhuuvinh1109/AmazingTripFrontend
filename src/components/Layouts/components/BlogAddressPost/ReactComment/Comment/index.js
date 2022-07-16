import { useEffect, useState, useContext, useRef } from 'react';
import { toast } from 'react-toastify';
import styles from './Comment.module.scss' ;
import classNames from 'classnames/bind';
import { BlogAddressContext } from '../../../../../../pages/BlogAddress/BlogAddressContext';
import { CommentContext } from '../CommentContext';
import images from '../../../../../../assets/images';
import commentAddressApi from '../../../../../../api/commentAddressApi';
import getCookie from '../../../../../../hooks/getCookie';
import getImage from '../../../../../../hooks/getImage';

const cx = classNames.bind(styles);


function Comment ({comment}) {
    const editStyle = {
        cursor: 'context-menu',
        outline: 'none'
    }

    const context = useContext(BlogAddressContext);
    const commentContext = useContext(CommentContext);

    const userData = JSON.parse(getCookie('userin'));

    const inputRef = useRef();
    const toggleRef = useRef();

    const [ava, setAva] = useState();

    const [showDot, setShowDot] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [edit, setEdit] = useState(false);

    const [editVal, setEditVal] = useState(comment);


    const handleDelete = () => {
        try {
            commentContext.handleResetCommentData(comment.comment_blog_id);
            context.handleResetCommentCount(comment.blog_address_id, false);
            commentAddressApi.delete(comment.comment_blog_id);
            toast.warning('Bình luận đã bị xóa !!!');
        } catch (error) {
            console.log('Toang meo chay roi loi cc: ', error)
        }
    }   

    const handleEdit = () => {
        setEdit(true);
        setShowEdit(false);
        inputRef.current.focus();
    }

    const handleSendEdit = () => {
        setEdit(false);
        try {
            commentAddressApi.patch(editVal);
        } catch (error) {
            console.log('Toang meo chay roi loi cc: ', error);
        }
    }

    useEffect(() => {
        const handler = (e) => {
            if(!toggleRef?.current?.contains(e.target))
                setShowEdit(false);
        }

        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    useEffect(() => {
        const getImageUrl = async () => {
            if(comment.avatar !== null)
            {
                try {
                    const res = await getImage(comment.avatar);
                    setAva(res);
                } catch (error) {
                }
            }
        }
        getImageUrl();
    }, [])
    
    return (
        <div 
            className={cx('each-comment')}
            onMouseOver={() => setShowDot(true)}
            onMouseLeave={() => setShowDot(false)}
        >
            <img 
                src={ava || images.defaultava} 
                width="35" 
                className={cx('user-ava')}
            />
            <div 
                className={cx('comment-area')}
            >
                <label htmlFor='input-comment'>
                    {comment.nickname}
                </label>
                <input
                    ref={inputRef}
                    id='input-comment'
                    className={cx('comment')}
                    value={editVal.comment_address_content}
                    onChange={(e) => 
                        setEditVal({...editVal, comment_address_content: e.target.value})
                    }
                    readOnly={!edit}
                    style={ edit ? {} : editStyle}
                />
                { edit && (
                    <button
                        className={cx('btn-edit')}
                        onClick={() => handleSendEdit()}
                    >
                        <i className="fa-solid fa-paper-plane"></i>
                    </button>
                )}
            </div>
            <div className={cx('toggle')}>
                { comment.id_user === userData.id && showDot && !edit && (
                    <button
                        onClick={() => setShowEdit(!showEdit)}
                    >
                        <i className="fa-solid fa-ellipsis icon-more"></i>
                    </button>
                )}
                { showEdit && 
                    <div 
                        ref={toggleRef}
                        className={cx('btn-edit-del')}
                    >
                        <button 
                            className="btn-edit"
                            onClick={() => handleEdit()}
                        >
                            Chỉnh sửa
                        </button>

                        <button 
                            className="btn-del"
                            onClick={() => handleDelete()}
                        >
                            Xóa bình luận
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Comment;