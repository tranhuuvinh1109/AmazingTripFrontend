import styles from './BtnCreateGroup.module.scss';
import classNames from 'classnames/bind';
import { FormCreateNewGroupContext } from '../BlogAddress/CreateNewGroupContext';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function BtnCreateGroup() {
    const toggle = useContext(FormCreateNewGroupContext)
    return (
        <div className={cx('create-group')} >
            <button className={cx('btn-create-group')} onClick={toggle.toggleCreate}>
                <i className="fa-solid fa-circle-plus"></i> <span>Tạo nhóm mới</span>
            </button>
        </div>
    );
}

export default BtnCreateGroup;