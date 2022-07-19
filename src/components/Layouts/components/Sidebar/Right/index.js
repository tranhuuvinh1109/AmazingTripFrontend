import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Right.module.scss';
import AddressList from './AddressList';
import getCookie from '../../../../../hooks/getCookie';
import { GlobalContext } from '../../../../../context/GlobalContext';
import bookmarkApi from '../../../../../api/bookmarkApi';
import userRefApi from '../../../../../api/userRefApi';
import FriendList from './FriendList';
import getImage from '../../../../../hooks/getImage';
import { logDOM } from '@testing-library/react';

const cx = classNames.bind(styles);

function Right() {
    const userData = JSON.parse(getCookie('userin'));
    const globalContext = useContext(GlobalContext);

    // Đặt trạng thái mặc định của toggle
    const [actived, setActived] = useState([]);
    
    // Đặt trạng thái đóng bật của toggle    
    const handleActived = (id) => {
        setActived(prev => {
            const isActived = actived.includes(id);
            if(isActived) {
                return actived.filter(item => item != id)
            } else {
                return [...prev, id]
            }
        })
    }

    useEffect(() => {
        const fetchBookmarkList = async () => {
            try {
                const res = await userRefApi.get(userData.id);
                res.follow?.map(async (each) => {
                    if(each.avatar !== null)
                    {
                        const image = await getImage(each.avatar);
                        each.avatar = image;
                    }
                })
                globalContext.setBookmarkData(res.bookmark);
                globalContext.setFollowData(res.follow);
            } catch (error) {
                console.log('Toang meo chay r loi cc: ', error);
            }
        }

        fetchBookmarkList();
    }, [])

    
    return (
        <>
            <ul className={cx('sticky-side-bar')}>
                <li className={cx('mb-2')}>
                    <button
                        className={cx('btn-title')}
                        onClick={() => handleActived('1')}
                    >
                        Địa điểm
                    </button>
                    <AddressList activedList={actived.includes('1')} />
                </li>

                <li className={cx('mb-2')}>
                    <button
                        className={cx('btn-title')}
                        onClick={() => handleActived('2')}
                    >
                        Bạn bè
                    </button>
                    <FriendList activedList={actived.includes('2')} />
                </li>
            </ul>
        </>
    );
}

export default Right;