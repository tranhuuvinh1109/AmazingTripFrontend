import { useContext } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './CoverImage.module.scss';
import images from '../../../assets/images';
import { UserPageContext } from "../UserPageContext";

const cx = classNames.bind(styles);

function CoverImage() {
    const context = useContext(UserPageContext);

    return ( 
        <div className={cx('cover-image')}>
            <img src={images.coverImage} alt=""/>
            <div className={cx('user-profile')}>
                <div className={cx('p-2')}>
                    <img src={context.userData ? context.userAva : images.defaultava} alt="A image"/>
                </div>
                <div className={cx('user-inf')}>
                    <h2>
                        {context.userData?.nickname}
                        <Link to={`/user_edit/${context.userData?.id}`}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </Link>

                    </h2>
                    <i className="fa-solid fa-users"></i>
                    <span className={cx('ms-2')}>5.6k</span>
                </div>
            </div>
        </div>
    );
}

export default CoverImage;