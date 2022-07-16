import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './HostPage.module.scss';
import getCookie from '../../hooks/getCookie';
import addressApi from '../../api/addressApi';
import { toast } from 'react-toastify';


const cx = classNames.bind(styles);

function HostPage() {
	const navigate = useNavigate();
	const { id } = useParams();

	const userData = JSON.parse(getCookie('userin'))

	const [address, setAddress] = useState([])
	useEffect(() => {
		const fetchAddressData = async () => {
			try {
				const res = await addressApi.getHost(id, userData.id);
				setAddress(res.data);
			} catch (error) {
				navigate(-1);
				toast.error('Khong tim thay dia diem !!!', {
					toastId: 1,
				});
			}
		};
		fetchAddressData();
	}, []);


	return (
		<>
			<div className={cx('left-content')}>
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
								navigate(`/addSale/${address.address_id}`)

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
			</div>
		</>
	)
}

export default HostPage;