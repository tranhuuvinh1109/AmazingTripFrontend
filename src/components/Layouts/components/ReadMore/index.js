import { useState } from 'react';
import styles from './ReadMore.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ReadMore({ limt, children }) {
    const [readMore, setReadMore] = useState(false);

    const toggleReadMore = () => {
        setReadMore(!readMore)
    }

    return (  
        <div>
            <p className={cx('content')}>
                { readMore ? children : children.substr(0, limt)}
                <button
                    onClick={toggleReadMore}
                >
                    Xem thêm
                </button>
            </p>
        </div>
    );
}

export default ReadMore;