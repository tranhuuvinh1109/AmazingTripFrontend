import { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CenterContent.module.scss';
import { UserPageContext } from '../UserPageContext';
import UserPagePost from '../../../components/Layouts/components/UserPagePost';
import { CommentProvider } from '../../../components/Layouts/components/UserPagePost/ReactComment/CommentContext';
import getCookie from '../../../hooks/getCookie';
import { GlobalContext } from '../../../context/GlobalContext';
import { db } from '../../../firebase';
import { MessageContext } from '../../../context/MessageContext';
import { setLogLevel } from 'firebase/app';
import firebase from '../../../firebase';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function CenterContent() {
    const globalContext = useContext(GlobalContext);
    const context = useContext(UserPageContext);
    const userData = JSON.parse(getCookie('userin'));
    const {rooms , selectedRoom, setSelectedRoom, messages} = useContext(MessageContext);
    const handleChating = () => {
        console.log(context.userData);
        let room =  rooms.find(each => each.members.includes(userData.id) && each.members.includes(context.userData.id))
        if(room) {
            setSelectedRoom(room);
        } else {
            context.setOld(false);
        }
        globalContext.setShowChatBox(true);
    }
    console.log(context.old);
    const handleReport = async () => {
        try {
            let resJSON ;
            const res = getCookie('userin');
            if(res)
                resJSON = JSON.parse(res)
            const query = db.collection('notifications');
            //console.log(userContext.userData)
            query.add({
                user1: resJSON.id,
                user2: [context.userData.id],
                user1name: userData.nickname,
                user2name: context.userData.nickname,
                user1ava: userData.avatar,
                user2ava: context.userData.avatar,
                type: 0,
                seen: 0,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
            toast.warning('Người dùng đã bị báo cáo !!!', {
                toastId: 1,
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bottom">
            { userData.id !== context.userData.id && (
                <div className={cx('heading')}>
                    <button 
                        className={cx('btn-chat')}
                        onClick={() => handleChating()}
                    >
                        <i className="fa-brands fa-facebook-messenger"></i>
                        Nhắn tin
                    </button>
                    <button 
                        className={cx('btn-report')}
                        onClick={() => handleReport()}
                    >
                        <i className="fa-solid fa-triangle-exclamation"></i>
                        Báo cáo
                    </button>
                </div>
            )}
            {context.postData?.length == 0 ? (
                <div className={cx('empty-area')}>
                    <h1>
                        Chưa có bài viết nào cả...
                        <br />
                        Hãy cùng khám phá
                        <span> AmazingTrip </span>
                        nào !!!
                    </h1>
                </div>
            ) :
                context.postData?.map((each) => (
                    <CommentProvider key={each.blog_address_id}>
                        <div className={cx('each-post')}>
                            <UserPagePost postData={each} slideShow={false} />
                        </div>
                    </CommentProvider>
                ))
            }
        </div>
    );
}

export default CenterContent;