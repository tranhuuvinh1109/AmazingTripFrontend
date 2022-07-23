import { useContext, useState, useEffect, useRef } from 'react';
import styles from './ChatBox.module.scss';
import classNames from 'classnames/bind';
import { GlobalContext } from '../../../../context/GlobalContext';
import ChatContent from './ChatContent';
import { MessageContext } from '../../../../context/MessageContext';
import { db } from '../../../../firebase';
import getCookie from '../../../../hooks/getCookie';
import firebase from '../../../../firebase';

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
    const globalContext = useContext(GlobalContext);
    const messageRef = useRef();
    const [input, setInput] = useState('');
    //console.log(messages);
    async function sendMessage(e) {
        e.preventDefault();
        if(input.length!=0){
            const query = db.collection('messages');
            let roomId = selectedRoom.id;
            if(!(rooms.find((room)=> room.id === selectedRoom.id))) {
              const newRoom = await db.collection('rooms').add({
                members: [userData.id, 1],
              })
              roomId = newRoom.id;
              setSelectedRoom(newRoom);
            }
            query.add({
                user1: userData.id,
                content: input,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                seen:0,
                roomId: roomId
            });
            setInput('')
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
                                src={"https://www.google.com.vn/imgres?imgurl=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEjDu8-o3TDXtQXTRx3qS06wY0lneXSgfFRJgguGBvrk7BSG3iDPvzLyBRAzTFo_syvRT48H1mgzJGAWCdafyIBlpaWn8THm-lr9x5NigKCbCuKL-SWLcQOXKSS8NEsd1aYglOmsJcfRYkkoWp1gAem1Mn61ZiFre-jNvV0oSOuHNHLKkHwN39tYKY5j%2Fs800%2FKonan%2520Koyoi.webp&imgrefurl=https%3A%2F%2Fwww.bookflas.com%2F2022%2F04%2Fcan-canh-nhan-sac-konan-koyoi-sieu-mau.html&tbnid=px7dk_JfQ7XKZM&vet=12ahUKEwiimL2gmIr5AhWaTPUHHY50CP4QMygCegUIARCNAQ..i&docid=SlW16In1lZXi3M&w=640&h=800&q=konan%20koyoi&ved=2ahUKEwiimL2gmIr5AhWaTPUHHY50CP4QMygCegUIARCNAQ"}
                            />
                            <h2 className={cx('nickname')}>{}</h2>
                        </div>
                        <button
                            className={cx('btn-close')}
                            onClick={() => globalContext.setShowChatBox(false)}
                        >
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className={cx('content')}>
                        {messages?.length === 0 ? (
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