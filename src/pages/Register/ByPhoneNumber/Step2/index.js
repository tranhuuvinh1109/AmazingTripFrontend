import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ByPhoneNumber.module.scss';
import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

//className={cx('')}
function ByPhoneNumber() {
        const location = useLocation()
        const { phone, password } = location.state;
        // console.log(phone, password)
        const navigate = useNavigate();
        const [inputs, setInputs] = useState({});

        const handleChange = (event) => {
                const name = event.target.name;
                const value = event.target.value;
                setInputs(values => ({ ...values, [name]: value }))
        }
        return (
                <div className={cx('container')}>
                        {/* <p>{inputs.role}</p>
                        <p>{inputs.email}</p>
                        <p>{inputs.name}</p> */}
                        {/* <span onClick={() => navigate(-1)}>{'<'}</span> */}
                        <span className={cx('goBack')} onClick={() => navigate(-1)}>{'<'}</span>


                        <img src={images.logo} className={cx('nav-logo')} alt='logo' />
                        <h3 className={cx('title')}>Đăng ký</h3>
                        <div>
                                <label for='sdt'>Họ và tên</label>
                                <input name='name' id='sdt' placeholder='Nhập họ và tên'
                                        value={inputs.name || ''}
                                        onChange={handleChange}
                                        required></input>
                        </div>
                        <div>
                                <label for='pw'>Email</label>
                                <input name='email' id='pw' placeholder='Nhập mật khẩu' type='email'
                                        value={inputs.email || ''}
                                        onChange={handleChange}
                                        required></input>

                        </div>
                        <div className={cx('who')}>
                                <p className={cx('title')}>Bạn là ?</p>
                                <input type="radio" name="age" className={cx('roleChoice')} value='Người dùng' onClick={() => setInputs(values => ({ ...values, role: '2' }))}/>Người dùng
                                <input type="radio" name="age" className={cx('roleChoice')} value='Chủ địa điểm' onClick={() => setInputs(values => ({ ...values, role: '1' }))}  />Chủ địa điểm
                        </div>
                        <Link to='/register/by-phone-number/step3' state={{ phone, password, email: inputs.email, name: inputs.name, role: inputs.role }} >

                                <span className={cx('continue')}>Tiếp tục {'>>'} </span>
                        </Link>


                        <span className={cx('moreOption')}>Bạn đã có tài khoản ? <Link to='/login'><span className={cx('register')}>Đăng nhập</span></Link></span>



                </div>
        )
}

export default ByPhoneNumber