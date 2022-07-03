import { useEffect, useContext, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './CreateFormNewGroup.module.scss';
import { FormCreateNewGroupContext } from '../CreateNewGroupContext';
import getCookie from '../../../hooks/getCookie';

const cx = classNames.bind(styles);



function CreateFormNewGroup() {
    const formContext = useContext(FormCreateNewGroupContext)

    const userData = JSON.parse(getCookie('userin'));
    console.log(userData);

    // Nhấn ra ngoài để đóng form`
    const closeFormRef = useRef();
    useEffect(() => {
        const handler = (e) => {
            if (!closeFormRef.current.contains(e.target))
                formContext.toggleCreate();
        }

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    })

    return (
        <div className={cx('form-background')}>
            <div
                ref={closeFormRef}
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