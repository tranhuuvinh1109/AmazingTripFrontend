import { useEffect, useContext, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './CreatePost.module.scss';
import { GroupPageContext } from '../GroupPageContext';
import getCookie from '../../../hooks/getCookie';
import getImage from '../../../hooks/getImage';
import storeImage from '../../../hooks/storeImage';
import deleteImage from '../../../hooks/deleteImage';
import blogGroupApi from '../../../api/blogGroupApi';

const cx = classNames.bind(styles);



function CreatePost() {
    const context = useContext(GroupPageContext);
    const [previewAvatar, setPreviewAvatar] = useState('');

    const { id } = useParams();
    const userData = JSON.parse(getCookie('userin'));

    const [formData, setFormData] = useState({
        id_user: userData.id,
        group_id: id,
        blog_title: '',
        blog_image: '',
        blog_content: ''
    });


    // Nhấn ra ngoài để đóng form`
    const closeRef = useRef();
    useEffect(() => {
        const handler = (e) => {
            if(!closeRef.current.contains(e.target))
                context.toggleForm();
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
        if(formData.blog_image !== '')
        {
            deleteImage(formData.blog_image)
            setFormData({...formData, blog_image: ''})
        }
        const file = e.target.files[0];
        const imagePath = await storeImage(file);
		setFormData({ ...formData, blog_image: imagePath});
        file.preview = URL.createObjectURL(file);
		setPreviewAvatar(file);
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()

        try {
            const res = await blogGroupApi.post(formData);
            context.setPostData(res.data);
            context.toggleForm();
        } catch (error) {
            console.log('Toang meo chay r loi cc', error);
        }
    }


    return ( 
        <div className={cx('form-background')}>
            <div
                ref={closeRef} 
                className={cx('form-container')}
            >
                <form className={cx('discount-form')} id="discount-form">
                    <label className={cx('form-label')} htmlFor="discount-form">
                        Tạo bài viết
                    </label>
                    <div className={cx('form-control')}>
                        <input 
                            type="text" 
                            id="title" 
                            placeholder='Bạn muốn đăng gì... ?'
                            autoComplete='off'
                            value={formData.blog_title}
                            onChange={
                                (e) => setFormData({...formData, blog_title: e.target.value})
                            }
                        />
                    </div>
                    
                    <div className={cx('form-control')}>
                        <input 
                            type="text" 
                            id="content" 
                            autoComplete='off'
                            placeholder='Nội dung bài đăng... '
                            value={formData.blog_content}
                            onChange={
                                (e) => setFormData({...formData, blog_content: e.target.value})
                            }
                        />
                    </div>

                    <div className={cx('form-control')}>
                        <div className={cx('image')}>
                            <label htmlFor="group-image">
                                { formData.blog_image !== '' ? 
                                    <img src={previewAvatar.preview || ''} />
                                    :
                                    <i className="fa-solid fa-camera"></i>
                                }
                            </label>
                            <input 
                                type="file" 
                                className={cx('input-image')}
                                id="blog-image" 
                                onChange={(e) => handleSetImage(e)}
                            />
                        </div>
                    </div>
                    <button
                        onClick={(e) => handleSubmitForm(e)}    
                    >
                        Đăng bài
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;