import { Fragment, useState, useRef} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ByPhoneNumber.module.scss';
import authApi from '../../../../api/authApi';
import useAuth from '../../../../hooks/useAuth';
import setCookie from '../../../../hooks/setCookie';
import removeCookie from '../../../../hooks/removeCookie';

const cx = classNames.bind(styles);

function ByPhoneNumber({ formData, setFormData }) {
	const { setAuth } = useAuth();
	
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	
	const userRef = useRef();
	const errRef = useRef();

	const [errMsg, setErrMsg] = useState('');

	// Form Submit
	const handlerSubmit = async () => {
		try {
			const res = await authApi.postLogin(formData)
			const user = res.user
			//console.log(res);
			setAuth({user});
			removeCookie('userin')
			setCookie('userin', JSON.stringify(user))
			setFormData({...formData, phone: ''});
			setFormData({...formData, password: ''});
			navigate(from, { replace: true });
		} catch (error) {
			if (!error?.res) {
				console.log('tat mat DB r bro !!!');
			}
			if (error.res?.status === 400)
				console.log('sai cmn tk mk r !!!');
			console.log('Toang meo chay roi loi cc: ', error);
		}

		console.log()
	}

	return (
		<Fragment>
			<h3 className={cx('title')}>Đăng nhập</h3>
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
			<div className={cx('form-control')}>
				<label htmlFor='pw'>Mật khẩu</label>
				<input 
					name="password"
					id='pw' 
					placeholder='Nhập mật khẩu' 
					type='password' 
					value={formData.password}
					onChange={(e) => 
						setFormData({...formData, password: e.target.value})
					}
					required 
				/>

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