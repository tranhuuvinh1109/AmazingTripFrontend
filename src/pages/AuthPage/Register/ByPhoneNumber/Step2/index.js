import { Fragment, useState, useRef, useEffect, useContext } from "react";
import classNames from 'classnames/bind';
import styles from './ByPhoneNumber.module.scss';
import { RegisterContext } from "../../RegisterContext";

const cx = classNames.bind(styles);

const NAME_REGEX = /^([A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ][a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]{1,6}\s?)+$/;
const EMAIL_REGEX = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

function Step2() {

	const context = useContext(RegisterContext);

	const nameRef = useRef();
	
	const [checkEmpty, setCheckEmpty] = useState(false);

	const [validName, setValidName] = useState(false);
	const [nameFocus, setNameFocus] = useState(false);

	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	useEffect(() => {
		nameRef.current.focus();
	}, [])

	useEffect(() => {
		const result = NAME_REGEX.test(context.formData.username);
		setValidName(result);
	}, [context.formData.username])

	useEffect(() => {
		const result = EMAIL_REGEX.test(context.formData.email);
		setValidEmail(result);
	}, [context.formData.email])


	useEffect(() => {
		context.showErr('')
	}, [context.formData.username, context.formData.email])

	const handleContinue = () => {
		if(validName && validEmail)
		{
			context.handleSetPage(true)
		}
		setCheckEmpty(true)
	}

	return (
		<Fragment>
			<h3 className={cx('title')}>Đăng ký</h3>
			<div className={cx('form-control')}>
				<label htmlFor='name'>
					Họ và tên
					<span className={validName ? cx('valid') : cx('hide')}>
						<i className="fa-solid fa-check"></i>
					</span>
					<span className={ validName || !context.formData.username && !checkEmpty ? cx('hide') : cx('invalid')}>
						<i className="fa-solid fa-xmark"></i>
					</span>	
				</label>
				<input 
					ref={nameRef} 
					type='text'
					name='name' 
					id='name' 
					autoComplete='off'
					placeholder='Nhập họ và tên'
					value={context.formData.username}
					onChange={(e) => 
						context.setFormData({...context.formData, username: e.target.value})
					}
					required
					aria-invalid={validName ? 'false' : 'true'}
					aria-describedby='namenote'
					onFocus={() => setNameFocus(true)}
					onBlur={() => setNameFocus(false)}
					className={!context.formData.username && !checkEmpty ? cx('') : validName ? cx('border-success') : cx('border-err')} 
				/>
				<span
					id='phonenote'
					className={nameFocus && context.formData.username && !validName ? cx('instructions') : cx('offscreen')}
				>
					Tên không hợp lệ !
				</span>
			</div>
			<div className={cx('form-control')}>
				<label htmlFor='email'>
					Email
					<span className={validEmail ? cx('valid') : cx('hide')}>
						<i className="fa-solid fa-check"></i>
					</span>
					<span className={ validEmail || !context.formData.email && !checkEmpty ? cx('hide') : cx('invalid')}>
						<i className="fa-solid fa-xmark"></i>
					</span>	
				</label>
				<input  
					name='email' 
					id='email' 
					autoComplete='off'
					placeholder='Nhập email' 
					type='text'
					value={context.formData.email}
					onChange={(e) => 
						context.setFormData({...context.formData, email: e.target.value})
					}
					required
					aria-invalid={validEmail ? 'false' : 'true'}
					aria-describedby='emailnote'
					onFocus={() => setEmailFocus(true)}
					onBlur={() => setEmailFocus(false)}
					className={!context.formData.email && !checkEmpty ? cx('') : validEmail ? cx('border-success') : cx('border-err')} 
				/>
				<span
					id='emailnote'
					className={emailFocus && context.formData.email && !validEmail ? cx('instructions') : cx('offscreen')}
				>
					Email không hợp lệ !
				</span>
			</div>
			<div className={cx('form-control')}>
				<label>Bạn là ?</label>
				<div className={cx('option')}>
					<input 
						type="radio" 
						name="age" 
						id='role-2' 
						value='2' 
						checked={context.formData.role == '2'}
						onChange={(e) => 
							context.setFormData({...context.formData, role: e.target.value})
						}
						
					/>
					<label htmlFor='role-2' className={cx('me-5')}>Người dùng</label>
					<input 
						type="radio" 
						name="age" 
						id='role-1' 
						value='1' 
						checked={context.formData.role == '1'}
						onChange={(e) => 
							context.setFormData({...context.formData, role: e.target.value})
						}
					/>
					<label htmlFor='role-1'>Chủ địa điểm</label>
				</div>
			</div>
			<button 
				className={cx('continue')}
				onClick={() => handleContinue()}
			>
				Tiếp tục {'>>'} 
			</button>
		</Fragment>
	)
}

export default Step2;