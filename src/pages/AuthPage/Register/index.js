import { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './RegisterPage.module.scss';
import OptionPage from './OptionPage';
import Step1 from './ByPhoneNumber/Step1';
import Step2 from './ByPhoneNumber/Step2';
import Step3 from './ByPhoneNumber/Step3';
import Step4 from './ByPhoneNumber/Step4';
import { RegisterContext } from './RegisterContext';

const cx = classNames.bind(styles);

function Register() {

    const getErr = useContext(RegisterContext);

    const PageDisplay = () => {
        switch (getErr.page) {
            case 0:
                return <OptionPage />;
            case 1: 
                return <Step1 />;
            case 2: 
                return <Step2 />;
            case 3: 
                return <Step3 />;
            case 4: 
                return <Step4 />;
            default:
                return <Fragment />;
        }
    }

    return (
        <div className={cx('container')}>
            <span 
                style={{visibility: getErr.page === 0 ? 'hidden' : 'visible',}}
                className={cx('goBack')} 
                onClick={() => getErr.handleSetPage(false)}
            >
                <i className="fa-solid fa-angle-left"></i>
            </span>
            <Fragment>
                {PageDisplay()}
            </Fragment>
            <span className={cx('more-option')}>
                Bạn đã có tài khoản ? 
                <Link to='/login'>
                    <span> Đăng nhập</span>
                </Link>
            </span>
        </div>
    );
}

export default Register;