import { useEffect, useContext, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CreateFormNewGroup.module.scss';
import { FormCreateNewGroupContext } from '../CreateNewGroupContext';
import getCookie from '../../../hooks/getCookie';
import { Axios } from 'axios';
import http from '../../../http';

const cx = classNames.bind(styles);



function CreateFormNewGroup() {
    const formContext = useContext(FormCreateNewGroupContext)

    // const userData = JSON.parse(getCookie('userin'));
    // console.log(userData);

    // Nhấn ra ngoài để đóng form`

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [address, setAddress] = useState(0)
    const [admin, setAdmin] = useState(0)
    const [member, setMember] = useState('')

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


    const handleChange = (e) => {
        setName(e.target.value)
        setAddress(1)
        setImage('image1.jpg')
        setAdmin(1)
        setMember('1-2')
        console.log(name, image, address, admin, member);
    }

    const handleClick = (e) => {
        // formContext.toggleForm

        e.preventDefault()

        http.post('/group', {
            group_name: name,
            group_image: image,
            address_id: address,
            group_admin: admin,
            group_member: member
        }).then(res => console.log(res)).catch(err => console.log(err));
        console.log("111222")

    }

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
                        <input type="text" id="name" placeholder='Nhập tên nhóm' value={name} onChange={(e) => handleChange(e)} />
                    </div>

                    <div className={cx('form-control')}>
                        <label htmlFor="name">Ảnh bìa: </label>
                        <input type="file" id="name" />
                    </div>
                    <button
                        onClick={(e) => handleClick(e)}
                    >
                        Tạo nhóm
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateFormNewGroup;