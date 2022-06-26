import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ByPhoneNumber.module.scss';
import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
import { useLocation } from 'react-router-dom';
import http from '../../../../http';
import Home from '../../../Home'



const cx = classNames.bind(styles);




//className={cx('')}
function ByPhoneNumber() {
        const navigate = useNavigate();

        const location = useLocation()
        const { phone, password, email, name, role, date, map } = location.state;
        // console.log(phone, password, email, name, role, date, map);
        const [inputs, setInputs] = useState({
                phone, password, email,username: name, role,birthday: date, address: map
        });

        const handleChange = (event) => {
                const name = event.target.name;
                const value = event.target.value;
                setInputs(values => ({ ...values, [name]: value }))
        }


        const submitForm = () => {
                http.post('/register', inputs).then((res) => {
                        navigate('/', {
                                state: {
                                        hi:'123'
                                }
                        })
                })
                console.log(inputs);

        }
   

       
        return (
                <div className={cx('container')}>


                        <img src={images.logo} className={cx('nav-logo')} alt='logo' />
                        <h3 className={cx('title')}>Đăng ký</h3>
                        <img src={require('../../../../assets/images/nonavater.png')}></img>
                        <div>
                                <label for='pw'>Biệt danh</label>
                                <input id='pw' placeholder='Nhập biệt danh của bạn' type='text' name='nickname' value={inputs.nickname || ''}
                                        onChange={handleChange}></input>

                        </div>
                        
                        <span onClick={() => navigate(-1)} className={cx('continue')}> {'<<'} Quay lại </span>

                        <button type='submit' onClick={submitForm}
                        className={cx('login')}>Đăng ký</button>


                        <span className={cx('moreOption')}>Bạn đã có tài khoản ? <Link to='/login'><span className={cx('register')}>Đăng nhập</span></Link></span>



                </div>
        )
}

export default ByPhoneNumber