import { useState, useEffect, useContext, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './DiscountForm.module.scss';
import { BlogAddressContext } from '../BlogAddressContext';
import getCookie from '../../../hooks/getCookie';
import discountApi from '../../../api/discountApi';

const cx = classNames.bind(styles);



function DiscountForm() {
    const context = useContext(BlogAddressContext);
    const userData = JSON.parse(getCookie('userin'));

    const [inputData, setInputData] = useState({
        discount_id: context.discountData.discount_id,
        id_user: userData.id,
        quantity_registed: '',
    });

    // Nhấn ra ngoài để đóng form`
    const closeRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await discountApi.postSaleRegister(inputData);
            context.toggleForm();
        } catch (error) {
            console.log('Toang meo chay r loi cc: ', error);
        }

    }

    useEffect(() => {
        const handler = (e) => {
            if (!closeRef.current.contains(e.target))
                context.toggleForm();
        }

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    }, [])

    return (
        <div className={cx('form-background')}>
            <div
                ref={closeRef}
                className={cx('form-container')}
            >
                <div className={cx('head-img-background')}>
                </div>
                <form className={cx('discount-form')} id="discount-form">
                    <label className={cx('form-label')} htmlFor="discount-form">
                        Form đăng ký du lịch tại
                        <br />
                        <span>Hội An</span>
                    </label>
                    <div className={cx('form-control')}>
                        <label htmlFor="name">Tên bạn là: </label>
                        <input 
                            type="text" 
                            id="name" 
                            value={userData.username}
                            readOnly
                        />
                    </div>
                    <div className={cx('form-control')}>
                        <label htmlFor="phone">Số điện thoại: </label>
                        <input 
                            type="text" 
                            id="phone" 
                            value={userData.phone}
                            readOnly
                        />
                    </div>

                    <div className={cx('form-control')}>
                        <label htmlFor="email">Email: </label>
                        <input 
                            type="text" 
                            id="email"
                            value={userData.email}
                            readOnly 
                        />
                    </div>

                    <div className={cx('form-control')}>
                        <label htmlFor="quantity">Số lượng: </label>
                        <input 
                            type="text" 
                            id="quantity" 
                            value={inputData.quantity_registed}
                            onChange={(e) => {
                                setInputData({...inputData, quantity_registed: e.target.value});
                            }}
                        />
                    </div>
                    <button
                        onClick={(e) => handleSubmit(e)}
                    >
                        Đăng ký
                    </button>
                </form>
            </div>
        </div>
    );
}

export default DiscountForm;