import classNames from 'classnames/bind';
import { Fragment } from 'react';
import styles from './LeftContent.module.scss';

const cx = classNames.bind(styles);


function LeftContent() {
    return ( 
        <Fragment>
            <div className={cx('top-left')}>
                <div className={cx('address')}>
                    <h2 className={cx('name')}>
                        Hội An
                        <i className={cx('fa-solid fa-location-dot')}></i>
                        <span className={cx('avatar')}>
                            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/281896920_534554055067659_2103376413571668716_n.jpg?stp=dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=j7BNtyGXhXAAX_hRifl&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLnllXQKcQizy9OEzLQUonG7eViUgPq4ynxejsTjcQClQ&oe=62D02342"
                                alt="" className={cx('avt-host')}/>
                        </span>
                    </h2>
                </div>

                <div className={cx('star')}>
                    <i className={cx('fa-solid fa-star')}></i>
                    <i className={cx('fa-solid fa-star')}></i>
                    <i className={cx('fa-solid fa-star')}></i>
                    <i className={cx('fa-solid fa-star')}></i>
                    <i className={cx('fa-solid fa-star')}></i>
                    <span>26.692</span>
                </div>
            </div>
            <div className={cx('top-form')}>
                <div className={cx('review')}>
                    <h5 className={cx('review-question')}>
                        Chuyến đi của bạn thế nào ...? *
                    </h5>
                    <div className={cx('review-star')}>
                        <i className={cx('fa-solid fa-star')}></i>
                        <i className={cx('fa-solid fa-star')}></i>
                        <i className={cx('fa-solid fa-star')}></i>
                        <i className={cx('fa-solid fa-star')}></i>
                        <i className={cx('fa-solid fa-star')}></i>
                    </div>
                </div>
                <div className={cx('share')}>
                    <h5 className={cx('share-title')}>
                        Chia sẻ *
                    </h5>
                    <textarea name="share" id="" cols="30" rows="8"
                        placeholder="Chia sẻ với mọi người về trải nghiệm của bạn: mô tả địa điểm, mức độ hài lòng về phục vụ, gọi ý cho khách du lịch?"></textarea>
                </div>
                <div className={cx('moment')}>
                    <h5 className={cx('moment-title')}>
                        Khoẳng khắc của bạn
                    </h5>
                    <div className={cx('wrapper')}>
                        <div className={cx('file-upload')}>
                            <input type="file" className={cx('choose-image')} />
                            <i className={cx('fa fa-arrow-up')}></i>
                        </div>
                    </div>
                    <div className={cx('check')}>
                        <input type="checkbox" className={cx('accept')} />
                        <p className={cx('check-content')}>
                            Tôi chứng nhận rằng đánh giá này được dựa trên trải nghiệm riêng cảu tôi và là ý kiến
                            chân thực của tôi về cơ sở này và rằng tôi không có mối liên hệ cá nhân hay công việc
                            nào với cơ sở này và không được cơ sở này tặng hay thanh toán để nào để viết đánh giá
                            này.
                        </p>
                    </div>
                    <div className={cx('submit')}>
                        <button className={cx('btn-submit')}>
                            Gửi đánh giá của bạn
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default LeftContent;