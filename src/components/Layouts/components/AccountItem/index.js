import classNames from "classnames/bind";

import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);


function AccountItem({ data }) {
    return (
        <Link to={`/profile/@${data.id}`} className={cx('wrapper')}>
            <img className={cx('avatar')} alt="avatar-user" src={data.avatar} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>
                        {data.full_name}
                    </span>
                    {data.tick && <i className="fa-solid fa-circle-check" style={{
                        marginLeft: "8px",
                        fontSize: "12px",
                        color: "rgb(32, 213, 236)"
                    }}></i>
                    }

                </p>
                <span className={cx('username')}>
                    {data.nickname}
                </span>
            </div>
        </Link>
    );
}

export default AccountItem;