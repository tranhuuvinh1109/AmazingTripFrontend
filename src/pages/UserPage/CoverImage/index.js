import { useContext } from "react";
import { toast } from 'react-toastify';
import { Link, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './CoverImage.module.scss';
import images from '../../../assets/images';
import { UserPageContext } from "../UserPageContext";
import { GlobalContext } from "../../../context/GlobalContext";
import getImage from '../../../hooks/getImage';
import getCookie from '../../../hooks/getCookie';
import followApi from "../../../api/followApi";

const cx = classNames.bind(styles);

function CoverImage() {
    const context = useContext(UserPageContext);
    const globalContext = useContext(GlobalContext);
    const { id } = useParams();
    const userData = JSON.parse(getCookie('userin'));

    const handleFollow = async () => {
        const data = {
            follower: userData.id,
            being_follower: id,
            follow_status: context.followCheck ? '0' : '1',
        }
        if(context.followCheck)
        {
            toast.warning('Xóa khỏi danh sách bạn bè !!!', {
                toastId: 1,
            });
            context.setFollowCheck(false);
            globalContext.handleResetFollowData(id);
        } else {
            context.setFollowCheck(true);
            toast.success('Thêm vào danh sách bạn bè !!!', {
                toastId: 2,
            });
        }
        try {
            const res = await followApi.post(data);
            context.setUserData({...context.userData, follow_status: res.data.follow_status});
            if(res.data.follow_status == 1)
            {
                if(res.data?.avatar !== null)
                {
                    const image = await getImage(res.data.avatar);
                    res.data.avatar = image;
                }
                globalContext.setFollowData([...globalContext.followData, res.data]);
                const total = parseInt(context.userData.number_follow) + 1;
                context.setUserData({...context.userData, number_follow: total });
            } else {
                const total = parseInt(context.userData.number_follow) - 1;
                context.setUserData({...context.userData, number_follow: total });
            }
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
                                    className={context.followCheck ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                    style={{ color: '#ff6666'}}
                                ></i>
                            </button>
                        )}

                    </h2>
                    <i className="fa-solid fa-users"></i>
                    <span className={cx('ms-2')}>{context.userData?.number_follow}</span>
                </div>
            </div>
        </div>
    );
}

export default CoverImage;