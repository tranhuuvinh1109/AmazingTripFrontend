import styles from './ChatContent.module.scss';
import classNames from 'classnames/bind';
import getCookie from '../../../../../hooks/getCookie';

const cx = classNames.bind(styles);

function ChatContent({ message, userData }) {
    

    return (
        <>
            {message.user1 !== userData.id ? (
                <div className={cx('sender')}>
                    <p>{message.content}</p>
                </div>

            ) : (
                <div className={cx('receiver')}>
                    <p>{message.content}</p>
                </div>
            )}
        </>
    );
}

export default ChatContent;