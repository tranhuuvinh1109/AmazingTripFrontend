import classNames from 'classnames/bind';
import styles from './CreatePost.module.scss';
import { SlideShow, BlogAddressPost } from '../../components/Layouts/components';
import LeftContent from './LeftContent';

const cx = classNames.bind(styles);

function CreatePost() {
    return ( 
        <div className={cx('body-content')}>
            <div className={cx('left-content')}>
                <LeftContent /> 
            </div>
            <div className={cx('right-content')}>
                <div className={cx('slide-show')}>
                    <SlideShow />
                </div>
                <div className={cx('comment')}>
                    <h2> Bình luận gần đây </h2>
                    <BlogAddressPost />
                </div>
            </div>
        </div>
    );
}

export default CreatePost;