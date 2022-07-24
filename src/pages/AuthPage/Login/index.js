import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './LoginPage.module.scss';
import OptionPage from './OptionPage';
import ByPhoneNumber from './ByPhoneNumber';

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
        phone: "",
        password: "",
    })

    const PageDisplay = () => {
        switch (page) {
            case 0:
                return <OptionPage handleSetPage={handleSetPage}/>;
            case 1:
                return <ByPhoneNumber formData={formData} setFormData={setFormData} />;
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
            { page !== 1 && page !== 0 && (
                <button 
                    className={cx('continue')}
                    onClick={() => handleSetPage(true)}
                >
                    Tiếp tục {'>>'} 
                </button>
            )}
            <span className={cx('more-option')}>
                Bạn chưa có tài khoản ? 
                <Link to='/register'>
                    <span> Đăng ký</span>
                </Link>
            </span>
        </div>
    );
}

export default Register;