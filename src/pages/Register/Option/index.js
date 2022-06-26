import React from 'react';
import classNames from 'classnames/bind';
import styles from './Option.module.scss';
import images from '../../../assets/images'
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

//className={cx('')}
function Option() {
        return (
                <div className={cx('container')}>
                        <span className={cx('title')}>Tham gia vào cộng đồng  <span className={cx('subtitle')}> AmazingTrip</span></span>
                        <Link to='/register/by-phone-number/step1' className={cx('sdt')}>
                                <button>
                                        <i className="fa-regular fa-user"></i>
                                        <span className={cx('optionContent')}>Sử dụng SĐT</span>
                                </button>
                        </Link>

                        <a>
                                <button className={cx('')}>
                                        <img src={require('../../../assets/images/google.png')} alt='Google' />
                                        <span className={cx('optionContent')}>Tiếp tục với Google</span>
                                </button>
                        </a>
                        <a>
                                <button className={cx('')}>
                                        <img src={require('../../../assets/images/facebook.png')} alt='facebook' />
                                        <span className={cx('optionContent')}>
                                                Tiếp tục với Facebook
                                        </span>
                                </button>
                        </a>

                        <span className={cx('moreOption')}>Bạn đã có tài khoản ? <Link to='/login'><span className={cx('register')}>Đăng nhập</span></Link></span>
                </div>
        )
}

export default Option