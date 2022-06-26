import React from 'react';
import classNames from 'classnames/bind';
import styles from './ByPhoneNumber.module.scss';
import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../../../http";


const cx = classNames.bind(styles);

//className={cx('')}
function ByPhoneNumber() {
        const [inputs, setInputs] = useState({});

        const handleChange = (event) => {
                const name = event.target.name;
                const value = event.target.value;
                setInputs(values => ({ ...values, [name]: value }))
        }

        return (
                <div className={cx('container')}>
                        <img src={images.logo} className={cx('nav-logo')} alt='logo' />
                        <h3 className={cx('title')}>Đăng ký</h3>
                        <div>
                                <label for='sdt'>Số điện thoại</label>
                                <input
                                        type='text' name='phone' id='sdt' placeholder='Nhập số điện thoại'
                                        value={inputs.phone || ''}
                                        onChange={handleChange}
                                        required ></input>
                        </div>
                        <div>
                                <label for='pw'>Mật khẩu</label>
                                <input type='password' name='password' id='pw' placeholder='Nhập mật khẩu'
                                        value={inputs.password || ''}
                                        onChange={handleChange} required ></input>
                        </div>
                        <div>
                                <label for='pw'>Xác nhận mật khẩu</label>
                                <input type='password' name='passwordAgain' id='pw' placeholder='Xác nhận mật khẩu'
                                        value={inputs.passwordAgain || ''}
                                        onChange={handleChange} required ></input>
                        </div>
                        <Link to='/register/by-phone-number/step2' state={{ phone: inputs.phone, password: inputs.password}}>
                                <button className={cx('continue')}>Tiếp tục {'>>'} </button>
                        </Link>
                        <span className={cx('moreOption')}>Bạn đã có tài khoản ? <Link to='/login'><span className={cx('register')}>Đăng nhập</span></Link></span>
                </div>
        )
}

export default ByPhoneNumber