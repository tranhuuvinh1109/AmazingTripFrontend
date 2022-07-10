import { useEffect, useContext, useRef, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './CreateFormNewGroup.module.scss';
import { toast } from 'react-toastify';
import { FormCreateNewGroupContext } from '../CreateNewGroupContext';
import { BlogAddressContext } from '../BlogAddressContext';
import getCookie from '../../../hooks/getCookie';
import getImage from '../../../hooks/storeImage';
import storeImage from '../../../hooks/storeImage';
import deleteImage from '../../../hooks/deleteImage';
import groupApi from '../../../api/groupApi';



const cx = classNames.bind(styles);


function CreateFormNewGroup() {
    const navigate = useNavigate();
    const context = useContext(BlogAddressContext);
    const formContext = useContext(FormCreateNewGroupContext);
    const userData = JSON.parse(getCookie('userin'));


    const [previewAvatar, setPreviewAvatar] = useState('');
    const [formData, setFormData] = useState({
        group_name: '',
        group_image: '',
        address_id: context.addressData.address_id,
        group_admin: userData.id,
    });

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

    // Xóa ảnh xem tạm thời
    useEffect(() => {
        return () => {
            URL.revokeObjectURL(previewAvatar.preview)
        }
    }, [previewAvatar])
	
    const handleSetImage = async (e) => {
        if(formData.group_image !== '')
        {
            deleteImage(formData.group_image)
            setFormData({...formData, group_image: ''})
        }
        const file = e.target.files[0];
		const imagePath = await storeImage(file);
		setFormData({ ...formData, group_image: imagePath});
        file.preview = URL.createObjectURL(file);
		setPreviewAvatar(file);
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()

        try {
            const res = await groupApi.post(formData);
            navigate(`/group/${res.data.group_id}`)
        } catch (error) {
            console.log('Toang meo chay r loi cc', error);
        }
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
                        <span>{context.addressData.address_name}</span>
                    </label>
                    <div className={cx('form-control')}>
                        <label htmlFor="group-name">Tên nhóm: </label>
                        <input 
                            type="text" 
                            id="group-name" 
                            placeholder='Nhập tên nhóm' 
                            value={formData.group_name} 
                            onChange={
                                (e) => setFormData({...formData, group_name: e.target.value})
                            } 
                        />
                    </div>

                    <div className={cx('form-control')}>
                        <label htmlFor="group-image">Ảnh bìa: </label>
                        <div className={cx('image')}>
                            <label htmlFor="group-image">
                                { formData.group_image !== '' ? 
                                    <img src={previewAvatar.preview || ''} />
                                    :
                                    <i className="fa-solid fa-camera"></i>
                                }
                            </label>
                            <input 
                                type="file" 
                                className={cx('input-image')}
                                id="group-image" 
                                onChange={(e) => handleSetImage(e)}
                            />
                        </div>
                    </div>
                    <button
                        onClick={(e) => handleSubmitForm(e)}
                    >
                        Tạo nhóm
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateFormNewGroup;