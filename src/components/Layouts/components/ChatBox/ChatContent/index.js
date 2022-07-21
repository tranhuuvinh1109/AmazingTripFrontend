import styles from './ChatContent.module.scss';
import classNames from 'classnames/bind';
import getCookie from '../../../../../hooks/getCookie';

const cx = classNames.bind(styles);

function ChatContent({ message }) {
    const userData = JSON.parse(getCookie('userin'));

    return (
        <>
            {message.id === userData.id ? (
                <div className={cx('sender')}>
                    <p>{message.message}</p>
                </div>

            ) : (
                <div className={cx('receiver')}>
                    <p>{message.message}</p>
                </div>
            )}
        </>
    );
}

export default ChatContent;