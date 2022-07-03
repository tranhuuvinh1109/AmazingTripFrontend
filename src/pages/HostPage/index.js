import classNames from 'classnames/bind';
import styles from './HostPage.module.scss';
import { Link, useLocation } from 'react-router-dom';
import http from '../../http'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import getCookie from '../../hooks/getCookie';



const cx = classNames.bind(styles);

function HostPage() {
        const navigate = useNavigate();

        const current_user = JSON.parse(getCookie('userin'))
        const user_id = current_user.id

      

        const [addresses, setAddresses] = useState([])
        useEffect(() => {
                const fetch = async () => {
                        http.get("/address_by_host/" + user_id).then((res) =>{
                                setAddresses(res.data.data)

                                // console.log(res.data.data);
                        })
                };
                fetch();
        }, []);
      

        return (
                <>
                        {addresses.map((address, index) =>
                        (<div key={index} className={cx('left-content')}>
                                <div className={cx('title')}>
                                        <h1 className={cx('address')}>{address.address_name}</h1>
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
                                                {address.address_description}
                                        </p>
                                </div>
                                <div className={cx('description-more')}>
                                        <div className={cx('sale')}>
                                                <h2 className={cx('subtitle')}>Khuyến mãi</h2>
                                                <div className={cx('contentSale')}>
                                                        <div>
                                                                {/* <div>
                                                                        <p>
                                                                                Từ ngày <span className={cx('dateSale')}>06/06/2022</span> đến ngày
                                                                                <span className={cx('dateSale')}>13/06/2022<br /> </span>Giảm giá trọn
                                                                                gói <span className={cx('amount')}>30%</span> đối với:<br />
                                                                                <span className={cx('amount')}> 50</span> quý khách đăng ký đầu tiên
                                                                        </p>
                                                                </div> */}
                                                                {/* <div className={cx('registered')}>
                                                                        <span className={cx('text')}>Số lượng đã đăng kí:</span>
                                                                        <span className={cx('amount')}>37/50</span>
                                                                </div> */}
                                                        </div>
                                                        <i onClick={() => {
                                                                navigate('/addSale',{state:{
                                                                        address_id:address.address_id
                                                                }})

                                                        }} className={cx('fa-solid fa-circle-plus addSaleInfo')}></i>
                                                </div>
                                        </div>

                                        <div className={cx('quanlity')}>
                                                <h2 className={cx('subtitle')}>Thống kê</h2>
                                                <div className={cx('content')}>
                                                        {/* <div>
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
                                                        </div> */}
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
                        </div>)

                             
                        
                        )}
                </>
        )
}

export default HostPage;