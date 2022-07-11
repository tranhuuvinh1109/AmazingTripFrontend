import { Fragment, useState, useRef, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import classNames from 'classnames/bind';
import styles from './ByPhoneNumber.module.scss';
import authApi from '../../../../api/authApi';
import useAuth from '../../../../hooks/useAuth';
import setCookie from '../../../../hooks/setCookie';
import removeCookie from '../../../../hooks/removeCookie';
import getImage from '../../../../hooks/getImage';

const cx = classNames.bind(styles);

function ByPhoneNumber({ formData, setFormData }) {
	const { setAuth } = useAuth();
	
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	
	const userRef = useRef();
	const errRef = useRef();

	const [errMsg, setErrMsg] = useState('');
	const [showPwd, setShowPwd] = useState(false);

	useEffect(() => {
		setErrMsg('');
	}, [formData.phone, formData.password])

	// Form Submit
	const handlerSubmit = async () => {
		try {
			const res = await authApi.postLogin(formData)
			if(res.status === 404 || res.status === 400)
				setErrMsg('SĐT/ mật khẩu không chính xác !!!');
			else {
				let user = res.user;
				setAuth({user});
				removeCookie('userin');
				const res2 = await getImage(user.avatar);
				user.avatar = res2;
				setCookie('userin', JSON.stringify(user))
				setFormData({...formData, phone: ''});
				setFormData({...formData, password: ''});
				toast.success("Đăng nhập thành công !!!", {
					toastId: 1,
				});
				navigate(from, { replace: true });
			}
		} catch (error) {
			if(error)
				setErrMsg('Không thể đăng nhập !!!');
		}

		console.log()
	}

	return (
		<Fragment>
			<div>
				<h3 className={cx('title')}>Đăng nhập</h3>
				<p 
					ref={errRef} 
					className={errMsg ? cx('errmsg') : cx('offscreen')} 
					aria-live="assertive"
				>
					{errMsg}
				</p>
			</div>
			<div className={cx('form-control')}>
				<label htmlFor='sdt'>Số điện thoại</label>
				<input 
					ref={userRef}
					name="phone"
					id='sdt' 
					placeholder='Nhập số điện thoại' 
					type='text'
					value={formData.phone}
					onChange={(e) => 
						setFormData({...formData, phone: e.target.value})
					}
					required 
				/>
			</div>
			<div className={cx('form-control')} style={{ position: 'relative' }}>
				<label htmlFor='password'>Mật khẩu</label>
				<input 
					name="password"
					id='password' 
					placeholder='Nhập mật khẩu' 
					type={ showPwd ? 'text' : 'password'} 
					value={formData.password}
					onChange={(e) => 
						setFormData({...formData, password: e.target.value})
					}
					required 
					className={cx('pwd')}
				/>
				<span 
					className={cx('show-pwd')}
					onClick={() => setShowPwd(!showPwd)}
				>
					
					{ !showPwd ? 
						(<i className="fa-solid fa-eye"></i>) :
						(<i className="fa-solid fa-eye-slash"></i>)
					}
				</span>
			</div>
			<button 
				type="submit" 
				className={cx('login')}
				onClick={() => handlerSubmit()}
			>
				Đăng nhập
			</button>
		</Fragment>
	)
}

export default ByPhoneNumber