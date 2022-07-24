import styles from './SlideShow.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SlideShow() {
    return ( 
        <>
            <img
                className={cx('img')} 
                src={'https://toanthaydinh.com/wp-content/uploads/2020/04/wallpaper-4k-hinh-nen-4k-hinh-anh-ve-ruong-bac-thang-dep_101311157-1400x788-1.jpg'}
            />
        </>
    );
}

export default SlideShow;