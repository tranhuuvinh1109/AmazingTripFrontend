import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ByPhoneNumber.module.scss';
import { Link } from 'react-router-dom';
import images from '../../../assets/images';
import http from '../../../http'

const cx = classNames.bind(styles);

//className={cx('')}
function ByPhoneNumber() {
        const navigate = useNavigate();

        const [inputs, setInputs] = useState({});
        const handleChange = (event) => {
                const name = event.target.name;
                const value = event.target.value;
                setInputs(values => ({ ...values, [name]: value }))
        }


        const submitForm = () => {
                http.post('/login', inputs).then((res) => {
                                navigate('/');
                       
                        })
                        console.log(inputs);

        }

        return (
                <div className={cx('container')}>
                        <span className={cx('goBack')} onClick={() => navigate(-1)}><i className="fa-solid fa-angle-left"></i></span>
                        <h3 className={cx('title')}>Đăng nhập</h3>
                        <div className={cx('form-control')}>
                                <label htmlFor='sdt'>Số điện thoại</label>
                                <input id='sdt' placeholder='Nhập số điện thoại' name= "phone"
                                        value={inputs.phone || ''}
                                        onChange={handleChange}></input>
                        </div>
                        <div className={cx('form-control')}>
                                <label htmlFor='pw'>Mật khẩu</label>
                                <input id='pw' placeholder='Nhập mật khẩu' type='password' name="password"
                                        value={inputs.password || ''}
                                        onChange={handleChange}></input>

                        </div>
                        <button type="submit" onClick={submitForm} className={cx('login')}>Đăng nhập</button>
                        
                        <span className={cx('moreOption')}>Bạn chưa có tài khoản ? <Link to='/register'><span className={cx('register')}>Đăng ký</span></Link></span>



                </div>
        )
}

export default ByPhoneNumber