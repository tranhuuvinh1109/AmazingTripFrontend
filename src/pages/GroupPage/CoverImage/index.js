import classNames from "classnames/bind";
import styles from './CoverImage.module.scss';
import images from '../../../assets/images';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function CoverImage() {
    return ( 
        <div className={cx('cover-image')}>
            <img src={images.coverImageGroup} alt="A image"/>
            <div className={cx('user-profile')}>
                <div className={cx('user-inf')}>
                    <h2>Group_name</h2>
                    <i className="fa-solid fa-users"></i>
                    <span className={cx('ms-2')}>5.6k</span>
                </div>
            </div>
        </div>
    );
}

export default CoverImage;