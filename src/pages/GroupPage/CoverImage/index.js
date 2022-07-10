import { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from './CoverImage.module.scss';
import { GroupPageContext } from "../GroupPageContext";
const cx = classNames.bind(styles);

function CoverImage() {
    const context = useContext(GroupPageContext);

    return ( 
        <div className={cx('cover-image')}>
            <img src={context.groupData ? context.imageUrl : ''} alt="A image"/>
            <div className={cx('user-profile')}>
                <div className={cx('user-inf')}>
                    <h2>{context.groupData ? context.groupData.group_name : ''}</h2>
                    <i className="fa-solid fa-users"></i>
                    <span className={cx('ms-2')}>5.6k</span>
                </div>
            </div>
        </div>
    );
}

export default CoverImage;