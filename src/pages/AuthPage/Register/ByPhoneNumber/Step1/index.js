import { Fragment, useState } from "react";
import classNames from 'classnames/bind';
import styles from './Step1.module.scss';

const cx = classNames.bind(styles);

function Step1({ formData, setFormData }) {
	return (
		<Fragment>
			<h3 className={cx('title')}>Đăng ký</h3>
			<div className={cx('form-control')}>
				<label htmlFor='sdt'>Số điện thoại:</label>
				<input
					type='text' 
					name='phone' 
					id='sdt' 	
					placeholder='Nhập số điện thoại'
					value={formData.phone}
					onChange={(e) => 
						setFormData({...formData, phone: e.target.value})
					}
					required 
				/>
			</div>
			<div className={cx('form-control')}>
				<label htmlFor='pw'>Mật khẩu:</label>
				<input 
					type='password' 
					name='password' 
					id='password' 
					placeholder='Nhập mật khẩu'
					value={formData.password}
					onChange={(e) => 
						setFormData({...formData, password: e.target.value})
					}
				/>
			</div>
			<div className={cx('form-control')}>
				<label htmlFor='pw'>Xác nhận mật khẩu:</label>
				<input 
					type='password' 
					name='confirm-password' 
					id='confirm-password' 
					placeholder='Xác nhận mật khẩu'
					value={formData.confirmPassword}
					onChange={(e) => 
						setFormData({...formData, confirmPassword: e.target.value})
					}
					required 
				/>
			</div>
		</Fragment>
	)
}

export default Step1;