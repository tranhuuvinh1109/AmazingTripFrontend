import { useEffect, useState, useContext, useRef } from 'react';
import { toast } from 'react-toastify';
import styles from './UserPageComment.module.scss' ;
import classNames from 'classnames/bind';
import commentAddressApi from '../../../../../api/commentAddressApi';
import { UserPageContext } from '../../../../../pages/UserPage/UserPageContext';
import getCookie from '../../../../../hooks/getCookie';
import getImage from '../../../../../hooks/getImage';

const cx = classNames.bind(styles);


function Comment ({comment}) {
    const editStyle = {
        cursor: 'context-menu',
        outline: 'none'
    }

    const context = useContext(UserPageContext);

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
            const comment_id = comment.comment_blog_id;
            context.handleResetCommentData(comment_id);
            context.handleResetCommentCount(comment.blog_id, false);
            commentAddressApi.delete(comment_id);
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
                const res = await getImage(comment.avatar);
                setAva(res);
            }
        }
        getImageUrl();
    }, [])
    
    return (
        <div className="mb-4" style={{ position: 'relative', }}>
            <div className={cx('user-inf')}>
                <img 
                    src={ava} 
                    className={cx('user-avatar')}
                />
                <p className="d-inline">
                    {comment.nickname}
                </p>
            </div>
            <div 
                className={cx('comment-area')}
                onMouseOver={() => setShowDot(true)}
                onMouseLeave={() => setShowDot(false)}
            >
                <input
                    ref={inputRef}
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