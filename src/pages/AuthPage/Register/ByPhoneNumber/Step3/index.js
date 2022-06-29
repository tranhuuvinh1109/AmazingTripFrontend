import { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './ByPhoneNumber.module.scss';


const cx = classNames.bind(styles);

function Step3({ formData, setFormData }) {

	return (
		<Fragment>
			<h3 className={cx('title')}>Đăng ký</h3>
			<div className={cx('form-control')}>
				<label htmlFor='sdt'>Ngày sinh</label>
				<input 
					id='sdt' 
					type='date' 
					name='date'
					value={formData.birthday}
					onChange={(e) => 
						setFormData({...formData, birthday: e.target.value})
					} 
				/>
			</div>
			<div className={cx('form-control')}>
				<label htmlFor='pw'>Địa chỉ</label>
				<input 
					type='text' 
					name='address'
					placeholder='Nhập địa chỉ' 
					id='address' 
					value={formData.address}
					onChange={(e) => 
						setFormData({...formData, address: e.target.value})
					}
				/>
			</div>
			<span className={cx('beEnd')}>Sắp hoàn thành rồi chút nữa thôi!!!</span>
		</Fragment>
	)
}

export default Step3;