import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import classNames from 'classnames/bind';
import styles from './CenterContent.module.scss';
import BlogGroupPost from '../../../components/Layouts/components/BlogGroupPost';
import { GroupPageContext } from '../GroupPageContext';
import { GlobalContext } from '../../../context/GlobalContext';
import blogGroupApi from '../../../api/blogGroupApi';
import getCookie from '../../../hooks/getCookie';
import groupApi from '../../../api/groupApi';

const cx = classNames.bind(styles);

function CenterContent() {
    const context = useContext(GroupPageContext);
    const globalContext = useContext(GlobalContext);
    const userData = JSON.parse(getCookie('userin'));
    const { id } = useParams();
    const data = {
        group_id: context.groupData.group_id,
        id_user: userData.id,
    }

    const handleJoin = async () => {
        try {
            const res = await groupApi.joinGroup(data);
            toast.success('Tham gia nhóm thành công !!!', {
                toastId: 1,
            });
            context.setMemberCheck(true);
            context.setGroupData({ ...context.groupData, 
                number_member: context.groupData.number_member + 1,
            })
            globalContext.setGroupData([...globalContext.groupData, {
                group_name: context.groupData.group_name,
                group_id: context.groupData.group_id,
            }]);
        } catch (error) {
            console.log('Toang meo chay r loi cc: ', error);
        }
    }

    const handleOut = async () => {
        try {
            const res = await groupApi.outGroup(context.groupData.group_id, userData.id);
            if (res) {
                toast.warning('Thoát khỏi nhóm thành công !!!', {
                    toastId: 2,
                });
                context.setMemberCheck(false);
                context.setGroupData({ ...context.groupData, 
                    number_member: context.groupData.number_member - 1,
                })
                globalContext.handleResetGroupData(context.groupData.group_id);
            }
        } catch (error) {
            console.log('Toang meo chay r loi cc: ', error);
        }

    }

    useEffect(() => {
        const fetchPostList = async () => {
            try {
                const res = await blogGroupApi.get(id);
                context.setPostData(res.data);
            } catch (error) {
                console.log('Toang meo chay r loi cc:  ', error)
            }
        }

        fetchPostList();
    }, [])

    return (
        <>
            {context.memberCheck ? (
                <>
                    <div className={cx('heading')}>
                        <div className={cx('create-post')}>
                            <button
                                onClick={context.toggleForm}
                                id='btn-create'
                            >
                                <i className="fa-solid fa-pen"></i>
                                <span>Tạo bài viết</span>
                            </button>
                        </div>
                        {context.groupData.group_admin !== userData.id && (
                            <div className={cx('leave-group')}>
                                <button
                                    id='btn-leave'
                                    onClick={() => handleOut()}
                                >
                                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                    <span>Rời nhóm</span>
                                </button>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <div className={cx('join-group')}>
                    <button
                        id='btn-join'
                        onClick={() => handleJoin()}
                    >
                        <i className="fa-solid fa-plus"></i>
                        <span>Gia nhập nhóm</span>
                    </button>
                </div>
            )}
            <div className="bottom">
                {context.postData?.length == 0 ? (
                    <div className={cx('empty-area')}>
                        <h1>
                            Chưa có bài viết nào cả...
                            <br />
                            Hãy là người đầu tiên chia sẻ với mọi người !!!
                        </h1>
                    </div>
                ) :
                    context.postData?.map((each) => (
                        <BlogGroupPost postData={each} key={each.blog_id} />
                    ))
                }
            </div>
        </>
    );
}

export default CenterContent;