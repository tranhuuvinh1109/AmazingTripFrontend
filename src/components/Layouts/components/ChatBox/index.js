import { useContext, useState, useEffect, useRef } from 'react';
import styles from './ChatBox.module.scss';
import classNames from 'classnames/bind';
import { GlobalContext } from '../../../../context/GlobalContext';
import ChatContent from './ChatContent';
import { MessageContext } from '../../../../context/MessageContext';
import { db } from '../../../../firebase';
import getCookie from '../../../../hooks/getCookie';
import firebase from '../../../../firebase';
import { UserPageContext } from '../../../../pages/UserPage/UserPageContext';

const cx = classNames.bind(styles);


const messageData = [
    {
        id: 1,
        message: 'Nhắn tin ...///',
    },
    {
        id: 39,
        message: 'Nhắn tin ...///',
    },
    {
        id: 39,
        message: 'Nhắn tin ...///',
    },
    {
        id: 1,
        message: 'Nhắn tin ...///',
    },
    {
        id: 39,
        message: 'Nhắn tin ...///',
    },
    {
        id: 1,
        message: 'Nhắn tin ...///',
    },
    {
        id: 39,
        message: 'Nhắn tin ...///',
    },
    {
        id: 1,
        message: 'Nhắn tin ...///',
    },
    {
        id: 39,
        message: 'Nhắn tin ...///',
    },
]


function ChatBox() {
    let userData ;
    const res = getCookie('userin');
    if(res)
        userData = JSON.parse(res);
    //console.log(userData);
    const {messages, selectedRoom, rooms, setSelectedRoom} = useContext(MessageContext);
    const context = useContext(UserPageContext);
    const globalContext = useContext(GlobalContext);
    const messageRef = useRef();
    const [input, setInput] = useState('');
    //console.log(messages);
    //console.log(userData);
    async function sendMessage(e) {
        e.preventDefault();
        if(input.length!=0){
            const query = db.collection('messages');
            let roomId = selectedRoom.id;
            if(!context.old) {
              let {id} = await db.collection('rooms').add({
                members: [userData.id, context.userData.id],
                user1ava: userData.avatar,
                user2ava: context.userData.avatar,
                user1nn: userData.nickname,
                user2nn: context.userData.nickname,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              });
              roomId = id;
              let data = await db.collection('rooms').where(firebase.firestore.FieldPath.documentId(), '==', id).get();
              setSelectedRoom({...data.docs[0].data(), id});
            }
            query.add({
                user1: userData.id,
                user1name: userData.nickname,
                user1ava: userData.avatar,
                content: input,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                seen:0,
                roomId: roomId
            });
            setInput('')
            if(!context.old){
            context.setOld(true);
            }
        }
      }
    // Get room data here
    // auto scroll to bottom 
    useEffect(() => {
        messageRef.current?.scrollIntoView();
    }, [messages]);

    return (
        <div className={cx('chatbox-container')}>
            {globalContext.showChatBox && (
                <>
                    <div
                        className={cx('header')}
                    >
                        <div className={cx('user-inf')}>
                            <img
                                className={cx('avatar')}
                                src={!context.old ? context.userData.avatar : selectedRoom.user1ava == userData.avatar ? selectedRoom.user2ava : selectedRoom.user1ava}
                            />
                            <h2 className={cx('nickname')}>{!context.old ? context.userData.nickname : selectedRoom.user1nn == userData.nickname ? selectedRoom.user2nn : selectedRoom.user1nn}</h2>
                        </div>
                        <button
                            className={cx('btn-close')}
                            onClick={() => {globalContext.setShowChatBox(false); context.setOld(true)}}
                        >
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className={cx('content')}>
                        {!context.old ? (
                            <h6>Chưa có tin nhắn nào !!!</h6>
                        ) : (
                            messages?.map((each, index) => (
                                <ChatContent key={index} message={each} userData={userData}/>
                            ))
                        )}
                        <div ref={messageRef}></div>
                    </div>
                    <div className={cx('send-chat')}>
                        <form>
                            <div className={cx('form-container')}>
                                <input
                                    type='text'
                                    id='message'
                                    placeholder={'Aa'}
                                    onChange={e=>setInput(e.target.value)}
                                    value={input}
                                    autoComplete={'off'}
                                />
                                <button
                                    type='submit'
                                    onClick={(e) => sendMessage(e)}
                                >
                                    <i className="fa-solid fa-paper-plane"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
}

export default ChatBox;