import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.scss';
import classNames from 'classnames/bind';
import SlideShow from './SlideShow';
import MostPopular from './MostPopular';
import MoreInf from './MoreInf';

const cx = classNames.bind(styles);


function LandingPage() {

    return (
        <div className={cx('main-content')}>
            <div>
                <SlideShow />
            </div>
            <div className={cx('most-popular')}>
                <MostPopular />
            </div>
            <div className={cx('more-inf')}>
                <MoreInf />
            </div>
            <div className={cx('what-find')}>
                <div className={cx('heading')}>
                    <h2 className={cx('title')}>
                        Bạn có thể tìm thấy gì ở 
                        <span className={cx('title-span')}>Amazingtrip</span> 
                        ?
                    </h2>
                    <span className={cx('line')}></span>
                    <h5 className={cx('subtitle')}>
                        Đây là nơi bạn có thể chia sẻ, giao lứu, tìm bạn đồng hành, 
                        <br />
                        tất cả những gì bạn cần cho chuyến đi sắp tới.
                    </h5>
                </div>
                <div className={cx('content')}>
                    <div className={cx('each-content')}></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;