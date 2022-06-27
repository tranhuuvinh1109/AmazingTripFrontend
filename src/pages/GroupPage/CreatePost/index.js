import { useEffect, useContext, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './CreatePost.module.scss';
import { CreatePostContext } from '../CreatePostContext';

const cx = classNames.bind(styles);



function CreatePost() {
    const formContext = useContext(CreatePostContext)

    // Nhấn ra ngoài để đóng form`
    const closeRef = useRef();
    useEffect(() => {
        const handler = (e) => {
            if(!closeRef.current.contains(e.target))
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
                <form className={cx('discount-form')} id="discount-form">
                    <label className={cx('form-label')} htmlFor="discount-form">
                        Tạo bài viết
                    </label>
                    <div className={cx('form-control')}>
                        <input type="text" id="name" placeholder='Bạn muốn đăng gì... ?'/>
                    </div>
                    
                    <div className={cx('form-control')}>
                        <input type="text" id="name" placeholder='Nội dung bài đăng... '/>
                    </div>

                    <div className={cx('form-control')}>
                        <label htmlFor="name">Hình ảnh: </label>
                        <input type="file" id="name" />
                    </div>
                    <button
                        onClick={ formContext.toggleForm }    
                    >
                        Đăng bài
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;