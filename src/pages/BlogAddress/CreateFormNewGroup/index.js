import { useEffect, useContext, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './CreateFormNewGroup.module.scss';
import { FormCreateNewGroupContext } from '../CreateNewGroupContext';

const cx = classNames.bind(styles);



function CreateFormNewGroup() {
    const formContext = useContext(FormCreateNewGroupContext)

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
    })

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
                        Form tạo nhóm mới
                        <br />
                        <span>Hội An</span>
                    </label>
                    <div className={cx('form-control')}>
                        <label htmlFor="name">Tên nhóm: </label>
                        <input type="text" id="name" placeholder='Nhập tên nhóm' />
                    </div>

                    <div className={cx('form-control')}>
                        <label htmlFor="name">Ảnh bìa: </label>
                        <input type="file" id="name" />
                    </div>
                    <button
                        onClick={formContext.toggleForm}
                    >
                        Tạo nhóm
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateFormNewGroup;