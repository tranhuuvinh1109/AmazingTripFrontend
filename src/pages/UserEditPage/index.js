import { Fragment, useState, useRef, useEffect } from "react";
import classNames from "classnames/bind";
import styles from './UserEditPage.module.scss';
import images from '../../assets/images';
import { Link } from "react-router-dom"; 

const cx = classNames.bind(styles);

function UserEditPage() {

    const [activeInput, setActiveInput] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if(inputRef.current.contains(e.target))
                setActiveInput(!activeInput)
        }

        document.addEventListener('click', handler);

        return () => {
            document.removeEventListener('click', handler);
        }
    })

    return ( 
        <Fragment>
            <div className={cx('cover-image')}>
                <img src={images.coverImage} alt="A image"/>
            </div>  
            <div className={cx('form-container')}>
                <form>
                    <div className={cx('user-img')}>
                        <div
                            ref={inputRef} 
                            className={cx('p-2')}
                        >
                            <img src={images.userAvatar} alt="A image" id="avatar"/>
                            { activeInput && (
                                <label htmlFor="avatar">
                                    {console.log('ngon chay ngon vl!!')}
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