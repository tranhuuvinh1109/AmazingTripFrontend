import { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CenterContent.module.scss';
import { UserPageContext } from '../UserPageContext';
import UserPagePost from '../../../components/Layouts/components/UserPagePost';

const cx = classNames.bind(styles);

function CenterContent() {
    const context = useContext(UserPageContext)

    return ( 
        <div className="bottom">
            {context.postData?.length == 0 ? (
                    <div className={cx('empty-area')}>
                        <h1>
                            Chưa có bài viết nào cả... 
                            <br/>
                            Hãy cùng khám phá 
                            <span> AmazingTrip </span>
                            nào !!!
                        </h1>
                    </div>
                ) : 
                context.postData?.map((each) => (
                    <UserPagePost postData={each} key={each.blog_address_id}/>
                ))
            }      
        </div>
    );
}

export default CenterContent;