import { Fragment, useState, useRef, useEffect } from "react";
import classNames from "classnames/bind";
import styles from './UserEditPage.module.scss';
import images from '../../assets/images';

const cx = classNames.bind(styles);

function UserEditPage() {

    const [activeInput, setActiveInput] = useState(false);
    const [previewAvatar, setPreviewAvatar] = useState(images.userAvatar);

    // effect bắt sự kiện nhấp chuột vào ảnh hiện lên cửa sổ input
    const inputRef = useRef();
    useEffect(() => {
        const handler = (e) => {
            if(inputRef.current.contains(e.target))
                setActiveInput(true)
            if(!inputRef.current.contains(e.target))
                setActiveInput(false)
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

    // Xem tạm thời ảnh sau khi ảnh được
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setPreviewAvatar(file)
    }

    return ( 
        <Fragment>
            <div className={cx('cover-image')}>
                <img src={images.coverImage} alt="A image"/>
            </div>  
            <div className={cx('form-container')}>
                <form>
                    <div className={cx('user-img')}>
                        <div ref={inputRef}>
                            <div>
                                <img  
                                    src={ previewAvatar.preview || images.userAvatar} 
                                    alt="A image" 
                                    id="avatar"
                                />
                            </div>
                                { activeInput && (
                                    <label htmlFor="avatar" className={cx('avatar')}>
                                    <Fragment>
                                        <div className={cx('camera-icon')}>
                                            <i className="fa-solid fa-camera"></i>
                                        </div>
                                        <div className={cx('input-ava')}>
                                            <input 
                                                type="file" 
                                                id="avatar"
                                                onChange={handlePreviewAvatar}
                                            />
                                        </div>
                                    </Fragment>
                                    </label>
                                )}
                        </div>
                    </div>  

                    <div className={cx('user-inf')}>
                        <div className={cx('container')}>
                            <div className={cx('form-control')}>
                                <label htmlFor="user-name">Biệt Danh</label>
                                <input type="text" placeholder="User_name" className={cx('w-50 ms-3')}></input>
                            </div>
                            <div className={cx('form-control')}>
                                <label htmlFor="user-name">Họ và tên</label>
                                <input type="text" placeholder="User_name" className={cx('w-50 ms-3')}></input>
                            </div>
                            <div className={cx('form-control')}>
                                <label htmlFor="user-name">Địa chỉ</label>
                                <input type="text" placeholder="xxx, xxx, xxx, xxx, Ha Noi" className={cx('w-75 ms-5')}></input>
                            </div>
                            <div className={cx('form-control')}>
                                <label htmlFor="user-name">Ngày sinh</label>
                                <input type="date" className={cx('w-50 ms-2')}></input>
                            </div>
                            <div className={cx('form-control')} >
                                <label htmlFor="user-name" className={cx('me-4')}>Email</label>
                                <input type="text" placeholder="Email" className={cx('w-50 ms-5')}></input>
                            </div>
                            <div className={cx('d-flex justify-content-center mt-3')}><button>Cập nhật</button></div>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default UserEditPage;