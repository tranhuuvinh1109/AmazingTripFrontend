import { useState } from 'react';
import styles from './ReadMore.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ReadMore({ limit, children }) {

    const text = children ? children : '';
    const [readMore, setReadMore] = useState(false);

    const toggleReadMore = () => {
        setReadMore(!readMore)
    }

    return (  
        <div>
            <p className={cx('content')}>
                { readMore ? text : text.substr(0, limit)}
                { text.length > limit && (
                    <button
                        onClick={toggleReadMore}
                    >
                        { !readMore ? '...Xem thêm' : 'Ẩn bớt'}
                    </button>
                )}
            </p>
        </div>
    );
}

export default ReadMore;