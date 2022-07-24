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
        console.log(room);
    }
    console.log(context.old);
    const handleReport = () => {

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