import classNames from 'classnames/bind';
import styles from './Left.module.scss';
import { useState } from 'react';

import SideContent from '../SideContent';

const cx = classNames.bind(styles);

const listContents = [
    {
        id: 'partner-list',
        title: 'Bạn đồng hành'
    },
    {
        id: 'group-location-list',
        title: 'Nhóm địa điểm'
    }
]

function Left() {

    return (
        <div className={cx('col-sm-2 ps-0 pe-1')}>
            <SideContent 
                openStatus={true}
                listContents={listContents}
            />
        </div>
    );
}

export default Left;