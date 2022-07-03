import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ByPhoneNumber.module.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function ByPhoneNumber() {
	const location = useLocation()
	const { phone, password } = location.state;

	const navigate = useNavigate();
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({ ...values, [name]: value }))
	}
	return (
		<div className={cx('container')}>
			<span className={cx('goBack')} onClick={() => navigate(-1)}><i className="fa-solid fa-angle-left"></i></span>

			<h3 className={cx('title')}>Đăng ký</h3>
			<div className={cx('form-control')}>
				<label htmlFor='sdt'>Họ và tên</label>
				<input className={cx('text-input')} name='name' id='sdt' placeholder='Nhập họ và tên'
					value={inputs.name || ''}
					onChange={handleChange}
					required></input>
			</div>
			<div className={cx('form-control')}>
				<label htmlFor='pw'>Email</label>
				<input className={cx('text-input')} name='email' id='pw' placeholder='Nhập mật khẩu' type='email'
					value={inputs.email || ''}
					onChange={handleChange}
					required></input>

			</div>
			<div className={cx('form-control')}>
				<label>Bạn là ?</label>
				<div className={cx('option')}>
					<input type="radio" name="age" id='role-1' value='Người dùng' onClick={() => setInputs(values => ({ ...values, role: '2' }))} />
					<label htmlFor='role-1' className={cx('me-5')}>Người dùng</label>
					<input type="radio" name="age" id='role-2' value='Chủ địa điểm' onClick={() => setInputs(values => ({ ...values, role: '1' }))} />
					<label htmlFor='role-2'>Chủ địa điểm</label>
				</div>
			</div>
			<Link to='/register/by-phone-number/step3' state={{ phone, password, email: inputs.email, name: inputs.name, role: inputs.role }} >
				<button className={cx('continue')}>Tiếp tục {'>>'} </button>
			</Link>
			<span className={cx('moreOption')}>Bạn đã có tài khoản ? <Link to='/login'><span className={cx('register')}>Đăng nhập</span></Link></span>



		</div>
	)
}

export default ByPhoneNumber