import React from 'react';
import classNames from 'classnames/bind';
import styles from './Option.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

//className={cx('')}
function Option() {
	return (
		<div className={cx('container')}>
			<span className={cx('title')}>Cùng <span className={cx('subtitle')}>AmazingTrip</span> khám phá thế giới</span>
			<Link to='/login/by-phone-number'>
				<button className={cx('sdt')}>
					<i className="fa-regular fa-user"></i>
					<span className={cx('optionContent')}>Sử dụng SĐT</span>
				</button>
			</Link>
			<a>
				<button className={cx('')}>
					<img src={require('../../../assets/images/google.png')} alt='Google' />
					<span className={cx('optionContent')}>Tiếp tục với Google</span>
				</button>
			</a>

			<a>
				<button className={cx('')}>
					<img src={require('../../../assets/images/facebook.png')} alt='facebook' />
					<span className={cx('optionContent')}>
						Tiếp tục với Facebook
					</span>
				</button>
			</a>

			<span className={cx('moreOption')}>Bạn chưa có tài khoản ? <Link to='/register'><span className={cx('register')}>Đăng ký</span></Link></span>


		</div>
	)
}

export default Option