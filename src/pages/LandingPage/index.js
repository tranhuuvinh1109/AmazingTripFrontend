import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.scss';
import classNames from 'classnames/bind';
import SlideShow from './SlideShow';
import MostPopular from './MostPopular';
import MoreInf from './MoreInf';
import images from '../../assets/images';
import { ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const cx = classNames.bind(styles);

function LandingPage() {
    return (
        <div className={cx('main-content')}>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(MoveOut(0, 500))}>
                        <SlideShow />
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1}>
                    <MostPopular />
                </ScrollPage>
                <ScrollPage page={2}>
                    <div className={cx('more-inf')}>
                        <MoreInf />
                    </div>
                </ScrollPage>
                <ScrollPage page={3}>
                    <div className={cx('what-find')}>
                        <div className={cx('heading')}>
                            <Animator animation={batch(FadeIn(), ZoomIn())}>
                                <h2 className={cx('title')}>
                                    Bạn có thể tìm thấy gì ở
                                    <span className={cx('title-span')}>Amazingtrip</span>
                                    ?
                                </h2>
                            </Animator>
                            <Animator animation={batch(FadeIn())}>
                                <span className={cx('line')}></span>
                            </Animator>
                            <Animator animation={batch(FadeIn(), MoveIn(0, -1000))}>
                                <h5 className={cx('subtitle')}>
                                    Đây là nơi bạn có thể chia sẻ, giao lưu, tìm bạn đồng hành,
                                    <br />
                                    tất cả những gì bạn cần cho chuyến đi sắp tới.
                                </h5>
                            </Animator>
                        </div>
                        <div className={cx('content')}>
                            <Animator animation={batch(FadeIn(), MoveIn(-500, 0))}>
                                <div className={cx('each-content')}>
                                    <div className={cx('heading')}>
                                        <img src={images.landing_1} />
                                        <h1>01</h1>
                                    </div>
                                    <h3>Bạn đồng hành</h3>
                                    <p>Nơi những người cô đơn gặp nhau, cùng trải qua những chuyến du lịch thú vị.</p>
                                </div>
                            </Animator>
                            <Animator animation={batch(FadeIn(), MoveIn(0, 500))}>
                                <div className={cx('each-content')}>
                                    <div className={cx('heading')}>
                                        <img src={images.landing_2} />
                                        <h1>02</h1>
                                    </div>
                                    <h3>Tiết kiệm tiền</h3>
                                    <p>Nơi tìm được những chuyến đi giá rẻ những cuộc vui bất tận.</p>
                                </div>
                            </Animator>
                            <Animator animation={batch(FadeIn(), MoveIn(500, 0))}>
                                <div className={cx('each-content')}>
                                    <div className={cx('heading')}>
                                        <img src={images.landing_3} />
                                        <h1>03</h1>
                                    </div>
                                    <h3>Chia sẻ</h3>
                                    <p>Nơi những khoảng khắc thú vị về chuyến đi của bạn được chia sẻ tới mọi người.</p>
                                </div>
                            </Animator>
                        </div>
                    </div>
                </ScrollPage>
            </ScrollContainer>
        </div>
    );
}

export default LandingPage;
