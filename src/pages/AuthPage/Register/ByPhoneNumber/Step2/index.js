import { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './ByPhoneNumber.module.scss';

const cx = classNames.bind(styles);

function Step2({ formData, setFormData }) {

	return (
		<Fragment>
			<h3 className={cx('title')}>Đăng ký</h3>
			<div className={cx('form-control')}>
				<label htmlFor='name'>Họ và tên</label>
				<input 
					className={cx('text-input')} 
					name='name' 
					id='name' 
					placeholder='Nhập họ và tên'
					value={formData.username}
					onChange={(e) => 
						setFormData({...formData, username: e.target.value})
					}
					required
				/>
			</div>
			<div className={cx('form-control')}>
				<label htmlFor='pw'>Email</label>
				<input 
					className={cx('text-input')} 
					name='email' 
					id='email' 
					placeholder='Nhập email' 
					type='email'
					value={formData.email}
					onChange={(e) => 
						setFormData({...formData, email: e.target.value})
					}
				/>
			</div>
			<div className={cx('form-control')}>
				<label>Bạn là ?</label>
				<div className={cx('option')}>
					<input 
						type="radio" 
						name="age" 
						id='role-2' 
						value='2' 
						checked={formData.role == '2'}
						onChange={(e) => 
							setFormData({...formData, role: e.target.value})
						}
						
					/>
					<label htmlFor='role-2' className={cx('me-5')}>Người dùng</label>
					<input 
						type="radio" 
						name="age" 
						id='role-1' 
						value='1' 
						checked={formData.role == '1'}
						onChange={(e) => 
							setFormData({...formData, role: e.target.value})
						}
					/>
					<label htmlFor='role-1'>Chủ địa điểm</label>
				</div>
			</div>
		</Fragment>
	)
}

export default Step2;