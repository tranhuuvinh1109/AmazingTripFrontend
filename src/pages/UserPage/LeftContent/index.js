import classNames from "classnames/bind";
import styles from './LeftContent.module.scss';

const cx = classNames.bind(styles);

function LeftContent() {
    return (  
        <div className={cx('sticky-side-bar')}>
            <h2 className={cx('side-title')}>
                Về tôi
            </h2>
            <ul className={cx('user-inf')}>
                
            </ul>
        </div>
    );
}

export default LeftContent;