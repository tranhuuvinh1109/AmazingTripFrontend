import classNames from 'classnames/bind';
import styles from './HostPage.module.scss';

import Header from '../DefaultLayout/Header';
import Footer from '../DefaultLayout/Footer';
import Right from '../DefaultLayout/Sidebar/Right';

const cx = classNames.bind(styles);

function HostPage() {
    return (  
        <div>
            <Header />
            <div className={cx('row m-0 ps-1 pe-2')}>
                <div className={cx('col-sm-10')}>
                <div className={cx('left-content')}>
                    <div className={cx('title')}>
                    <h1 className={cx('address')}>Hội An</h1>
                    <button className={cx('update')}>Sửa</button>
                    </div>

                    <div className={cx('banner')}>
                    <img
                        src="https://media.istockphoto.com/photos/view-of-hoi-an-ancient-town-picture-id1154942577?b=1&k=20&m=1154942577&s=170667a&w=0&h=brsEUccoWmXZ6JZIPBgIOFNHqp0V8bSdL-_8eYflgiM="
                        alt=""
                    />
                    </div>
                    <div className={cx('description')}>
                        <h2 className={cx('subtitle')}>Mô tả</h2>

                        <p>
                            Phố cổ Hội An là một thành phố nổi tiếng của tỉnh Quảng Nam, một phố
                            cổ giữ được gần như nguyên vẹn với hơn 1000 di tích kiến trúc . Phố
                            cổ Hội An là một thành phố nổi tiếng của tỉnh Quảng Nam, một phố cổ
                            giữ được gần như nguyên vẹn với hơn 1000 di tích kiến trúc. Phố cổ
                            Hội An là một thành phố nổi tiếng của tỉnh Quảng Nam, một phố cổ giữ
                            được gần như nguyên vẹn với hơn 1000 di tích kiến trúc. Phố cổ Hội
                            An là một thành phố nổi tiếng của tỉnh Quảng Nam, một phố cổ giữ
                            được gần như nguyên vẹn với hơn 1000 di tích kiến trúc. Phố cổ Hội
                            An là một thành phố nổi tiếng của tỉnh Quảng Nam, một phố cổ giữ
                            được gần như nguyên vẹn với hơn 1000 di tích kiến trúc. Phố cổ Hội
                            An là một thành phố nổi tiếng của tỉnh Quảng Nam, một phố cổ giữ
                            được gần như nguyên vẹn với hơn 1000 di tích kiến trúc
                        </p>
                    </div>
                    <div className={cx('description-more')}>
                    <div className={cx('sale')}>
                        <h2 className={cx('subtitle')}>Khuyến mãi</h2>
                        <div className={cx('contentSale')}>
                        <div>
                            <div>
                            <p>
                                Từ ngày <span className={cx('dateSale')}>06/06/2022</span> đến ngày
                                <span className={cx('dateSale')}>13/06/2022<br /> </span>Giảm giá trọn
                                gói <span className={cx('amount')}>30%</span> đối với:<br />
                                <span className={cx('amount')}> 50</span> quý khách đăng ký đầu tiên
                            </p>
                            </div>
                            <div className={cx('registered')}>
                            <span className={cx('text')}>Số lượng đã đăng kí:</span>
                            <span className={cx('amount')}>37/50</span>
                            </div>
                        </div>
                        <i className={cx('fa-solid fa-circle-plus addSaleInfo')}></i>
                        </div>
                    </div>

                    <div className={cx('quanlity')}>
                        <h2 className={cx('subtitle')}>Thống kê</h2>
                        <div className={cx('content')}>
                        <div>
                            <span>Số lượng bài viết:</span>
                            <span className={cx('amountContent')}>370</span>
                        </div>
                        <div>
                            <span>Số lượng theo dõi:</span>
                            <span className={cx('amountContent')}>5000</span>
                        </div>

                        <div>
                            <span>Lượng tương tác trong ngày:</span>
                            <span className={cx('amountContent')}>10</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className={cx('list')}>
                    <button className={cx('registers')}>
                        <h3>Danh sách form đăng ký</h3>
                    </button>
                    <button className={cx('posts')}>
                        <h3>Danh sách bài đánh giá</h3>
                    </button>
                    </div>
                </div>
                </div>
                <Right />
            </div>
            <Footer />
        </div>
    );
}

export default HostPage;