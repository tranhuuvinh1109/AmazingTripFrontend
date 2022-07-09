import { useEffect, useContext, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './DiscountForm.module.scss';
import { BlogAddressContext } from '../BlogAddressContext';

const cx = classNames.bind(styles);



function DiscountForm() {
    const formContext = useContext(BlogAddressContext)

    // Nhấn ra ngoài để đóng form`
    const closeRef = useRef();
    useEffect(() => {
        const handler = (e) => {
            if (!closeRef.current.contains(e.target))
                formContext.toggleForm();
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
                        <input type="text" id="name" />
                    </div>
                    <div className={cx('form-control')}>
                        <label htmlFor="name">Số điện thoại: </label>
                        <input type="text" id="name" />
                    </div>

                    <div className={cx('form-control')}>
                        <label htmlFor="name">Email: </label>
                        <input type="text" id="name" />
                    </div>

                    <div className={cx('form-control')}>
                        <label htmlFor="name">Số lượng: </label>
                        <input type="text" id="name" />
                    </div>
                    <button
                        onClick={formContext.toggleForm}
                    >
                        Đăng ký
                    </button>
                </form>
            </div>
        </div>
    );
}

export default DiscountForm;