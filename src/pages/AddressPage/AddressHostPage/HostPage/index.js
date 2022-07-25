import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './HostPage.module.scss';
import { AddressHostPageContext } from '../AddressHostPageContext';
import AddressInf from './AddressInf';


const cx = classNames.bind(styles);

function HostPage() {
	const context = useContext(AddressHostPageContext);
	console.log(context.addressData);
	return (
		<>
			<div className={cx('left-content')}>
				<div className={cx('title')}>
					<h1 className={cx('address')}>{context.addressData.address_name}</h1>
					<button className={cx('update')}>Sửa</button>
				</div>

				<div className={cx('banner')}>
					<img src={context.addressData?.address_image}/>
				</div>
				<div className={cx('description')}>
					<h2 className={cx('subtitle')}>Mô tả</h2>
					<div className={cx('address-detail')}>
						<p>
							{context.addressData.address_description}
						</p>
					</div>
				</div>
				<AddressInf />
				{/* <div className={cx('list')}>
					<button className={cx('registers')}>
						<h3>Danh sách form đăng ký</h3>
					</button>
					<button className={cx('posts')}>
						<h3>Danh sách bài đánh giá</h3>
					</button>
				</div> */}
			</div>
		</>
	)
}

export default HostPage;