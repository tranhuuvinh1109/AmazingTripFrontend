import { Fragment, useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './ByPhoneNumber.module.scss';
import { RegisterContext } from "../../RegisterContext";

const cx = classNames.bind(styles);

function Step3() {

	const context = useContext(RegisterContext);

	const [checkEmpty, setCheckEmpty] = useState(false);

	useEffect(() => {
		context.showErr('')
	}, [context.formData.birthday, context.formData.address])

	const handleContinue = () => {
		if(context.formData.birthday && context.formData.address)
		{
			context.handleSetPage(true)
		}
		setCheckEmpty(true)
	}

	return (
		<Fragment>
			<h3 className={cx('title')}>Đăng ký</h3>
			<div className={cx('form-control')}>
				<label htmlFor='birthday'>
					Ngày sinh
					<span className={context.formData.birthday ? cx('valid') : cx('hide')}>
						<i className="fa-solid fa-check"></i>
					</span>
					<span className={ context.formData.birthday || !checkEmpty ? cx('hide') : cx('invalid')}>
						<i className="fa-solid fa-xmark"></i>
					</span>
				</label>
				<input 
					id='birthday' 
					type='date' 
					name='date'
					value={context.formData.birthday}
					onChange={(e) => 
						context.setFormData({...context.formData, birthday: e.target.value})
					} 
					className={!context.formData.birthday && !checkEmpty ? cx('') : context.formData.birthday ? cx('border-success') : cx('border-err')} 
				/>
			</div>
			<div className={cx('form-control')}>
				<label htmlFor='address'>
					Địa chỉ
					<span className={context.formData.address ? cx('valid') : cx('hide')}>
						<i className="fa-solid fa-check"></i>
					</span>
					<span className={ context.formData.address || !checkEmpty ? cx('hide') : cx('invalid')}>
						<i className="fa-solid fa-xmark"></i>
					</span>
				</label>
				<input 
					type='text' 
					name='address'
					id='address' 
					autoComplete='off'
					placeholder='Nhập địa chỉ' 
					value={context.formData.address}
					onChange={(e) => 
						context.setFormData({...context.formData, address: e.target.value})
					}
					className={!context.formData.address && !checkEmpty ? cx('') : context.formData.address ? cx('border-success') : cx('border-err')} 
				/>
			</div>
			<span className={cx('beEnd')}>Sắp hoàn thành rồi chút nữa thôi!!!</span>
			<button 
				className={cx('continue')}
				onClick={() => handleContinue()}
			>
				Tiếp tục {'>>'} 
			</button>
		</Fragment>
	)
}

export default Step3;