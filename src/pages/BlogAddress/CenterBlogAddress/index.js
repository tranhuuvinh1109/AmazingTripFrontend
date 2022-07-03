import Left from './Left';
import { SlideShow } from '../../../components/Layouts/components';
import styles from './CenterAddress.module.scss';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function CenterAddress() {
    return (
        <div className={cx('row m-0 ps-1 pe-1')}>
            <div className={cx('col-sm-4 p-0 pe-2')}>
                <Left />
            </div>
            <div className={cx('col-sm-8 p-0')}>
                <SlideShow />
            </div>
        </div>

    )
}

export default CenterAddress;