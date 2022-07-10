import classNames from 'classnames/bind';
import styles from './Top.module.scss';
import { BlogAddressContext } from '../../BlogAddressContext';
import { useContext } from 'react';
 
// const [description, setDescription] = useState();

const cx = classNames.bind(styles);

function Top() {
    const context = useContext(BlogAddressContext);

    return (
        <div className={cx('center-left-top')}>
            <h3 className={cx('des')}>
                Mô tả
            </h3>
            <p>
               {context.addressData.address_description}
            </p>
        </div>
    )
}

export default Top;