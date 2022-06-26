import classNames from 'classnames/bind';
import styles from './SideContent.module.scss';
import { useState } from 'react';

import ListItem from './ListItem';


const cx = classNames.bind(styles);

function SideContent({ openStatus, listContents }) {

    // Đặt trạng thái mặc định của toggle
    const [actived, setActived] = useState(() => {
        let allActived = []
        
        if(openStatus)
            allActived = listContents.map(each => each.id)

        return allActived
    });

    // Đặt trạng thái đóng bật của toggle
    const handleActived = (id) => {
        setActived(prev => {
            const isActived = actived.includes(id);
            if(isActived) {
                return actived.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }

    return (
        <ul className={cx('sticky-side-bar')}>
            {listContents.map(content => (
                <li
                    className={cx('mb-2')} 
                    id={content.id} 
                    key={content.id}
                >
                    <button
                        className={cx('btn-title')}
                        onClick={() => handleActived(content.id)}
                    >
                        {content.title}
                    </button>
                    <ListItem 
                        location={content.id === 'location-list'}
                        openStatus={openStatus} 
                        activedList={actived.includes(content.id)} 
                    />
                </li>
            ))}
        </ul>
    );
}

export default SideContent;