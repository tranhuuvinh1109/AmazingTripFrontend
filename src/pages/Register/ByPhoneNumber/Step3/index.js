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
        const { phone, password, email, name, role } = location.state;
        // console.log(phone, password, email, name, role)

        const [inputs, setInputs] = useState({});

        const handleChange = (event) => {
                const name = event.target.name;
                const value = event.target.value;
                setInputs(values => ({ ...values, [name]: value }))
        }


        const navigate = useNavigate();
        return (
                <div className={cx('container')}>
                        <span className={cx('goBack')} onClick={() => navigate(-1)}>{'<'}</span>

                        <img src={images.logo} className={cx('nav-logo')} alt='logo' />
                        <h3 className={cx('title')}>Đăng ký</h3>
                        <div>
                                <label for='sdt'>Ngày sinh</label>
                                <input id='sdt' type='date' name='date' value={inputs.date || ''}
                                        onChange={handleChange}></input>
                        </div>
                        <div>
                                <label for='pw'>Địa chỉ</label>
                                <input id='pw' placeholder='Nhập địa chỉ' type='text' name= "map"
                                        value={inputs.map || ''}
                                        onChange={handleChange}></input>

                        </div>
                        <span className={cx('beEnd')}>Sắp hoàn thành rồi chút nữa thôi!!!</span>
                        <Link to='/register/by-phone-number/step4' state={{ phone, password, email, name, role, date: inputs.date, map: inputs.map }} >

                                <span className={cx('continue')}>Tiếp tục {'>>'} </span>
                        </Link>

                        <span className={cx('moreOption')}>Bạn đã có tài khoản ? <Link to='/login'><span className={cx('register')}>Đăng nhập</span></Link></span>



                </div>
        )
}

export default ByPhoneNumber