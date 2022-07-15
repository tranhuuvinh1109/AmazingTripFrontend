import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Left.module.scss';
import GroupList from './GroupList';
import BtnCreateGroup from '../../../../../pages/BtnCreateGroup';
import groupApi from '../../../../../api/groupApi';

const cx = classNames.bind(styles);

function Left() {
    
    // Đặt trạng thái mặc định của toggle
    const [actived, setActived] = useState(['1', '2']);
    
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

    
    return (
        <Fragment>
            <BtnCreateGroup />
            <ul className={cx('sticky-side-bar')}>
                <li
                    className={cx('mb-2')} 
                >
                    <button
                        className={cx('btn-title')}
                        onClick={() => handleActived('1')}
                    >
                        Bạn đồng hành
                    </button>
                    {/* <ListItem 
                        location={content.id === 'location-list'}
                        openStatus={openStatus} 
                        activedList={actived.includes(content.id)} 
                    /> */}
                </li>
                <li
                    className={cx('mb-2')} 
                >
                    <button
                        className={cx('btn-title')}
                        onClick={() => handleActived('2')}
                    >
                        Nhóm địa điểm
                    </button>
                    <GroupList activedList={actived.includes('2')} />
                </li>
            </ul>
        </Fragment>
    );
}

export default Left;