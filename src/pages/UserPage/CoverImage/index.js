import classNames from "classnames/bind";
import styles from './CoverImage.module.scss';
import images from '../../../assets/images';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function CoverImage() {
    return ( 
        <div className={cx('cover-image')}>
            <img src={images.coverImage} alt="A image"/>
            <div className={cx('user-profile')}>
                <div className={cx('p-2')}>
                    <img src={images.userAvatar} alt="A image"/>
                </div>
                <div className={cx('user-inf')}>
                    <h2>
                        User_name
                        <Link to='/user_edit'>
                            <i class="fa-solid fa-pen-to-square"></i>
                        </Link>

                    </h2>
                    <i class="fa-solid fa-users"></i>
                    <span className={cx('ms-2')}>5.6k</span>
                </div>
            </div>
        </div>
    );
}

export default CoverImage;