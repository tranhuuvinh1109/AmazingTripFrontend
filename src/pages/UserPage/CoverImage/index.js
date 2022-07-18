import { useContext, useState, useEffect } from "react";
import { toast} from 'react-toastify';
import { Link, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './CoverImage.module.scss';
import images from '../../../assets/images';
import { UserPageContext } from "../UserPageContext";
import getCookie from '../../../hooks/getCookie';
import followApi from "../../../api/followApi";

const cx = classNames.bind(styles);

function CoverImage() {
    const context = useContext(UserPageContext);
    const { id } = useParams();
    const userData = JSON.parse(getCookie('userin'));

    const handleFollow = async () => {
        let inputData = {
            follower: userData.id,
            being_follower: id,
            follow_status: '0',
        }
        if(context.followData.follow_status == '1')
        {
            toast.warning('Xóa khỏi danh sách bạn bè !!!', {
                toastId: 1,
            });
        } else {
            inputData.follow_status = '1';
            toast.success('Thêm vào danh sách bạn bè !!!', {
                toastId: 2,
            });
        }
        try {
            const res = await followApi.post(inputData);
            context.setFollowData({...context.followData, follow_status: res.data.follow_status});
        } catch (error) {
            console.log('Toang meo chay r loi cc: ', error);
        }
    }


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
                            <button
                                onClick={() => handleFollow()}
                                style={{ backgroundColor: 'transparent' }}
                            >
                                <i 
                                    className={context.followData?.follow_status == '1' ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                ></i>
                            </button>
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