import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './RegisterPage.module.scss';
import OptionPage from './OptionPage';
import Step1 from './ByPhoneNumber/Step1';
import Step2 from './ByPhoneNumber/Step2';
import Step3 from './ByPhoneNumber/Step3';
import Step4 from './ByPhoneNumber/Step4';

const cx = classNames.bind(styles);

function Register() {

    // Đặt trạng thái hiển thị trang theo từng bước
    const [page, setPage] = useState(0);

    const handleSetPage = (next) => {
        if(next)
            setPage((currPage) => currPage + 1)
        else 
            setPage((currPage) => currPage - 1)
    }


    // Lấy dữ liệu của form
    const [formData, setFormData] = useState({
        username: "",
        birthday: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        address: "",
        nickname: "",
        role: "",
    })

    const PageDisplay = () => {
        switch (page) {
            case 0:
                return <OptionPage handleSetPage={handleSetPage}/>;
            case 1: 
                return <Step1 formData={formData} setFormData={setFormData}/>;
            case 2: 
                return <Step2 formData={formData} setFormData={setFormData}/>;
            case 3: 
                return <Step3 formData={formData} setFormData={setFormData}/>;
            case 4: 
                return <Step4 formData={formData} setFormData={setFormData}/>;
            default:
                return <Fragment />;
        }
    }

    return (
        <div className={cx('container')}>
            <span 
                style={{visibility: page === 0 ? 'hidden' : 'visible',}}
                className={cx('goBack')} 
                onClick={() => handleSetPage(false)}
            >
                <i className="fa-solid fa-angle-left"></i>
            </span>
            <Fragment>
                {PageDisplay()}
            </Fragment>
            { page !== 4 && page !== 0 && (
                <button 
                    className={cx('continue')}
                    onClick={() => handleSetPage(true)}
                >
                    Tiếp tục {'>>'} 
                </button>
            )}
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