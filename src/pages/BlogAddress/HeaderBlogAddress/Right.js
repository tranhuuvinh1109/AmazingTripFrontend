import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Right.module.scss';

const cx = classNames.bind(styles);

function Right() {
    const {id} = useParams();

    return (
        <div className={cx('right')}>
            <div className={cx('btn-book')}>
                <button className={cx('btn')}><i className="fa-regular fa-bookmark me-1"></i> Bookmark</button>
            </div>
            <div className={cx('btn-write')}>
                <button className={cx('btn')}>
                    <Link to={`/address/`+id+`/createBlog`} >
                        <i className="fa-solid fa-pen me-1"></i> 
                        Viết bài
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Right;