import { Fragment, useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './UserEditPage.module.scss';
import images from '../../assets/images';
import userApi from "../../api/userApi";
import getImage from "../../hooks/getImage";

const cx = classNames.bind(styles);

function UserEditPage() {
    const { id } =  useParams();

    const [activeInput, setActiveInput] = useState(false);
    const [previewAvatar, setPreviewAvatar] = useState(images.userAvatar);
    const [userData, setUserData] = useState();
    const [userAva, setUserAva] = useState('');

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

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await userApi.getAll(id);
                setUserData(res.data);
                const image = await getImage(res.data.avatar);
                setUserAva(image);
            } catch (error) {
                console.log('Toang meo chay r loi cc ', error);
            }
        }

        fetchUserData();
    }, [])

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
                                    src={ previewAvatar.preview || userData ? userAva : images.defaultava} 
                                    alt="" 
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
                                <input 
                                    type="text" 
                                    className={cx('w-50 ms-3')}
                                    placeholder="User_name" 
                                    value={userData?.nickname}
                                />
                            </div>
                            <div className={cx('form-control')}>
                                <label htmlFor="user-name">Họ và tên</label>
                                <input 
                                    type="text" 
                                    placeholder="User_name" 
                                    className={cx('w-50 ms-3')}
                                    value={userData?.username}
                                />
                            </div>
                            <div className={cx('form-control')}>
                                <label htmlFor="user-name">Địa chỉ</label>
                                <input 
                                    type="text" 
                                    placeholder="xxx, xxx, xxx, xxx, Ha Noi" 
                                    className={cx('w-75 ms-5')}
                                    value={userData?.address}
                                />
                            </div>
                            <div className={cx('form-control')}>
                                <label htmlFor="user-name">Ngày sinh</label>
                                <input 
                                    type="date" 
                                    className={cx('w-50 ms-2')}
                                    value={userData?.birthday}
                                />
                            </div>
                            <div className={cx('form-control')} >
                                <label htmlFor="user-name" className={cx('me-4')}>Email</label>
                                <input 
                                    type="text" 
                                    placeholder="Email" 
                                    className={cx('w-50 ms-5')}
                                    value={userData?.email}
                                />
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