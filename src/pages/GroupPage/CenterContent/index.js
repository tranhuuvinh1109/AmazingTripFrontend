import { Fragment, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './CenterContent.module.scss';
import { BlogAddressPost } from '../../../components/Layouts/components';
import { CreatePostContext } from '../CreatePostContext';

const cx = classNames.bind(styles);

function CenterContent() {
    const formContext = useContext(CreatePostContext)

    return ( 
        <Fragment>
            <div className={cx('heading')}>
                <div className={cx('create-post')}>
                    <button
                        onClick={ formContext.toggleForm } 
                        id='btn-create'
                    >
                        <i className="fa-solid fa-pen"></i>
                        <span>Tạo bài viết</span>
                    </button>
                </div>
                <div className={cx('leave-group')}>
                    <button id='btn-leave'>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        <span>Rời nhóm</span>
                    </button>
                </div>
            </div>
            <BlogAddressPost />
            <BlogAddressPost />
            <BlogAddressPost />
        </Fragment>
    );
}

export default CenterContent;