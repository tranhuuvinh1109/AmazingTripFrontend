import styles from './MostPopular.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MostPopular() {
    return ( 
        <div className={cx('container')}>
            <div className={cx('heading')}>
                <h2 className={cx('title')}>
                    Theo dõi nhiều nhất
                </h2>
                <span className={cx('line')}></span>
                <h5 className={cx('subtitle')}>
                    Những địa điểm
                    <br/>
                    được nhiều người quan tâm, thảo luận, được đánh giá cao nhất.
                </h5>
            </div>
            <div className={cx('content')}>
                <div className={cx('card-1')}>
                    <img src={'https://toanthaydinh.com/wp-content/uploads/2020/04/wallpaper-4k-hinh-nen-4k-hinh-anh-ve-ruong-bac-thang-dep_101311157-1400x788-1.jpg'} />
                </div>
                <div className={cx('card-2')}>
                    <img src={'https://toanthaydinh.com/wp-content/uploads/2020/04/wallpaper-4k-hinh-nen-4k-hinh-anh-ve-ruong-bac-thang-dep_101311157-1400x788-1.jpg'} />
                </div>
                <div className={cx('card-3')}>
                    <img src={'https://toanthaydinh.com/wp-content/uploads/2020/04/wallpaper-4k-hinh-nen-4k-hinh-anh-ve-ruong-bac-thang-dep_101311157-1400x788-1.jpg'} />
                </div>  
                <div className={cx('card-4')}>
                    <img src={'https://toanthaydinh.com/wp-content/uploads/2020/04/wallpaper-4k-hinh-nen-4k-hinh-anh-ve-ruong-bac-thang-dep_101311157-1400x788-1.jpg'} />
                </div>
                <div className={cx('card-5')}>
                    <img src={'https://toanthaydinh.com/wp-content/uploads/2020/04/wallpaper-4k-hinh-nen-4k-hinh-anh-ve-ruong-bac-thang-dep_101311157-1400x788-1.jpg'} />
                </div>
            </div>
        </div>
    );
}

export default MostPopular;