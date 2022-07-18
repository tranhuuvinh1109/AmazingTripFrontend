import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Right.module.scss';
import AddressList from './AddressList';
import getCookie from '../../../../../hooks/getCookie';
import { GlobalContext } from '../../../../../context/GlobalContext';
import bookmarkApi from '../../../../../api/bookmarkApi';

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
                const res = await bookmarkApi.get(userData.id);
                globalContext.setBookmarkData(res.data);
            } catch (error) {
                console.log('Toang meo chay r loi cc: ', error);
            }
        }

        fetchBookmarkList();
    }, [])

    
    return (
        <>
            <ul className={cx('sticky-side-bar')}>
                <li
                    className={cx('mb-2')} 
                >
                    <button
                        className={cx('btn-title')}
                        onClick={() => handleActived('1')}
                    >
                        Địa điểm
                    </button>
                    <AddressList activedList={actived.includes('1')} />
                </li>
            </ul>
        </>
    );
}

export default Right;