import { Fragment, useState, useRef, useEffect, useContext } from "react";
import classNames from 'classnames/bind';
import styles from './Step1.module.scss';
import { RegisterContext } from "../../RegisterContext";

const cx = classNames.bind(styles);

const PHONE_REGEX = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function Step1() {

	const context = useContext(RegisterContext);

	const phoneRef = useRef();
	
	const [checkEmpty, setCheckEmpty] = useState(false);

	const [validPhone, setValidPhone] = useState(false);
	const [phoneFocus, setPhoneFocus] = useState(false);

	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);


	useEffect(() => {
		phoneRef.current.focus();
	}, [])

	useEffect(() => {
		const result = PHONE_REGEX.test(context.formData.phone);
		setValidPhone(result);
	}, [context.formData.phone])

	useEffect(() => {
		const result = PWD_REGEX.test(context.formData.password);
		setValidPwd(result);
		const match = context.formData.password === context.formData.confirmPassword;
		setValidMatch(match);
	}, [context.formData.password, context.formData.confirmPassword])

	useEffect(() => {
		context.showErr('')
	}, [context.formData.phone, context.formData.password, context.formData.confirmPassword])


	const handleContinue = () => {
		if(validPhone && validPwd && validMatch )
		{
			context.handleSetPage(true)
		}
		setCheckEmpty(true)
	}

	return (
		<Fragment>			
			<h3 className={cx('title')}>
				Đăng ký
			</h3>
			<div className={cx('form-control')}>
				<label htmlFor='phone'>
					Số điện thoại:
					<span className={validPhone ? cx('valid') : cx('hide')}>
						<i className="fa-solid fa-check"></i>
					</span>
					<span className={ validPhone || !context.formData.phone && !checkEmpty ? cx('hide') : cx('invalid')}>
						<i className="fa-solid fa-xmark"></i>
					</span>
				</label>
				<input
					type='text' 
					name='phone' 
					id='phone' 	
					autoComplete='off'
					ref={phoneRef}
					placeholder='Nhập số điện thoại'
					value={context.formData.phone}
					onChange={(e) => 
						context.setFormData({...context.formData, phone: e.target.value})
					}
					required
					aria-invalid={validPhone ? 'false' : 'true'}
					aria-describedby='phonenote'
					onFocus={() => setPhoneFocus(true)}
					onBlur={() => setPhoneFocus(false)}
					className={!context.formData.phone && !checkEmpty ? cx('') : validPhone ? cx('border-success') : cx('border-err')} 
				/>
				<span
					id='phonenote'
					className={phoneFocus && context.formData.phone && !validPhone ? cx('instructions') : cx('offscreen')}
				>
					Số điện thoại không hợp lệ !
				</span>
			</div>
			<div className={cx('form-control')}>
				<label htmlFor='pw'>
					Mật khẩu:
					<span className={validPwd ? cx('valid') : cx('hide')}>
						<i className="fa-solid fa-check"></i>
					</span>
					<span className={validPwd || !context.formData.password && !checkEmpty ? cx('hide') : cx('invalid')}>
						<i className="fa-solid fa-xmark"></i>
					</span>
				</label>
				<input 
					type='password' 
					name='password' 
					id='password' 
					placeholder='Nhập mật khẩu'
					value={context.formData.password}
					onChange={(e) => 
						context.setFormData({...context.formData, password: e.target.value})
					}
					required
					aria-invalid={validPwd ? 'false' : 'true'}
					aria-describedby='pwdnote'
					onFocus={() => setPwdFocus(true)}
					onBlur={() => setPwdFocus(false)}
					className={!context.formData.password && !checkEmpty ? cx('') : validPwd ? cx('border-success') : cx('border-err')} 
				/>
				<span
					id='pwdnote'
					className={pwdFocus && context.formData.password && !validPwd ? cx('instructions') : cx('offscreen')}
				>
					Ít nhất 8 ký tự, có cả viết hoa, thường và số
				</span>
			</div>
			<div className={cx('form-control')}>
				<label htmlFor='confirm-password'>
					Xác nhận mật khẩu:
					<span className={validMatch && context.formData.confirmPassword ? cx('valid') : cx('hide')}>
						<i className="fa-solid fa-check"></i>
					</span>
					<span className={validMatch && context.formData.confirmPassword || !context.formData.confirmPassword && !checkEmpty ? cx('hide') : cx('invalid')}>
						<i className="fa-solid fa-xmark"></i>
					</span>
				</label>
				<input 
					type='password' 
					name='confirm-password' 
					id='confirm-password' 
					placeholder='Xác nhận mật khẩu'
					value={context.formData.confirmPassword}
					onChange={(e) => 
						context.setFormData({...context.formData, confirmPassword: e.target.value})
					}
					required 
					aria-invalid={validPwd ? 'false' : 'true'}
					aria-describedby='matchnote'
					onFocus={() => setMatchFocus(true)}
					onBlur={() => setMatchFocus(false)}
					className={!context.formData.confirmPassword && !checkEmpty ? cx('') : validMatch && context.formData.confirmPassword ? cx('border-success') : cx('border-err')} 
				/>
				<span
					id='matchnote'
					className={matchFocus && context.formData.confirmPassword && !validMatch ? cx('instructions') : cx('offscreen')}
				>
					Mật khẩu không trùng khớp
				</span>
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

export default Step1;