import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './CoverImage.module.scss';
import images from '../../../assets/images';
import { UserPageContext } from "../UserPageContext";
import getCookie from '../../../hooks/getCookie';

const cx = classNames.bind(styles);

function CoverImage() {
    const context = useContext(UserPageContext);
    const { id } = useParams();
    const userData = JSON.parse(getCookie('userin'));

    return (
        <div className={cx('cover-image')}>
            <img src={images.coverImage} alt="" />
            <div className={cx('user-profile')}>
                <div className={cx('p-2')}>
                    <img src={context.userData ? context.userAva : images.defaultava} alt="A image" />
                </div>
                <div className={cx('user-inf')}>
                    <h2>
                        {context.userData?.nickname}
                        {userData.id == id ? (
                            <Link to={`/user_edit/${context.userData?.id}`}>
                                <i className="fa-solid fa-pen-to-square"></i>
                            </Link>
                        ) : (
                            <i className="fa-regular fa-heart"></i>
                        )}

                    </h2>
                    <i className="fa-solid fa-users"></i>
                    <span className={cx('ms-2')}>5.6k</span>
                </div>
            </div>
        </div>
    );
}

export default CoverImage;