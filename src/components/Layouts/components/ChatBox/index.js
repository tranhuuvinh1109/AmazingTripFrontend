import { useContext, useState, useEffect, useRef } from 'react';
import styles from './ChatBox.module.scss';
import classNames from 'classnames/bind';
import { GlobalContext } from '../../../../context/GlobalContext';
import ChatContent from './ChatContent';

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
    const globalContext = useContext(GlobalContext);
    const messageRef = useRef();

    const [roomData, setRoomData] = useState({});

    const handleSend = (e) => {
        e.preventDefault();

    }

    // Get room data here
    useEffect(() => {
        setRoomData(globalContext.roomData[0]);
    }, [globalContext.roomData[0]?.id]);

    // Set messageData here
    const [message, setMessage] = useState([]);
    useEffect(() => {
        setMessage(messageData);
    }, []);

    // auto scroll to bottom 
    useEffect(() => {
        messageRef.current?.scrollIntoView();
    }, [message]);

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
                                src={roomData?.avatar}
                            />
                            <h2 className={cx('nickname')}>{roomData?.nickname}</h2>
                        </div>
                        <button
                            className={cx('btn-close')}
                            onClick={() => globalContext.setShowChatBox(false)}
                        >
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className={cx('content')}>
                        {message?.length === 0 ? (
                            <h6>Chưa có tin nhắn nào !!!</h6>
                        ) : (
                            message?.map((each, index) => (
                                <ChatContent key={index} message={each}/>
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
                                    autoComplete={'off'}
                                />
                                <button
                                    type='submit'
                                    onClick={(e) => handleSend(e)}
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