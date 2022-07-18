import Tippy from '@tippyjs/react';
import styles from './Avatar.module.scss';
import classNames from 'classnames/bind';
import UserMenu from './UserMenu';

const cx = classNames.bind(styles);

function Avatar({ src, size, userData, placement }) {


    return ( 
        <Tippy
            className={cx('tippy-box')}
            theme={'custom'}
            interactive={true}
            placement={placement}
            animation={'fade'}
            arrow={false}
            allowHTML={true}
            content={(<UserMenu userInf={userData} size={size}/>)}
        >
            <button className={cx('btn-ava')}
                style={{ width: size, height: size }}
            >
                <img 
                    className={cx('avatar')} 
                    src={src}
                />
            </button>
        </Tippy>
    );
}

export default Avatar;