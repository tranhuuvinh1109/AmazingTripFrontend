import classNames from 'classnames/bind';
import styles from './Right.module.scss';
import SideContent from '../SideContent';


const cx = classNames.bind(styles);

const listContents = [
    {
        id: 'location-list',
        title: 'Địa điểm'
    },
    {
        id: 'friend-list',
        title: 'Bạn bè'
    },
    {
        id: 'group-list',
        title: 'Nhóm'
    }
]

function Right() {

    return (
        <div className={cx('col-sm-2 ps-0 pe-1')}>
            <SideContent 
                openStatus={false}
                listContents={listContents}
            />
        </div>
    );
}

export default Right;