import { useContext } from 'react';
import styles from './MenuNotification.module.scss';
import classNames from 'classnames/bind';
import { GlobalContext } from '../../../../../context/GlobalContext';

const cx = classNames.bind(styles);


const data = [
    {
        id: 1,
        avatar: 'https://nld.mediacdn.vn/2020/5/29/doi-hoa-tim-5-1590731334546464136746.jpg',
        nickname: 'thdeathzz',
    },
    {
        id: 2,
        avatar: 'https://1.bp.blogspot.com/-1F0txd6CTXk/XyjEn1_2atI/AAAAAAAAiX0/2X1yKYprbxEAPvrNA4VoX_nuv8nawCSuQCNcBGAsYHQ/d/a5a84b393a0778e047f87c79478481e7.jpg',
        nickname: 'Unknow101><',
    },
    
]

function MenuMessgae() {
    const globalContext = useContext(GlobalContext);

    // set roomData to globalContext
    const handleOpenChatbox = (id) => {

        globalContext.setRoomData([...data.filter(obj => obj.id === id)]);
        globalContext.setShowChatBox(true);
    };

    return (
        <div className={cx('noti-container')}>
            <h3 className={cx('title')}>Tin nhắn</h3>
            <ul className={cx('noti-content')}>
                {data.length !== 0 ? (
                    data.map((each) => (
                        <li
                            key={each.id}
                            className={cx('each-noti')}
                        >
                            <button
                                className={cx('btn-noti')}
                                onClick={(id) => handleOpenChatbox(each.id)}
                            >
                                <div className={cx('btn-content')}>
                                    <img className={cx('avatar')} src={each.avatar}/>
                                    <h4>{each.nickname}</h4>
                                </div>
                            </button>
                        </li>
                    ))
                ) : (
                    <h5 className={cx('empty-noti')}>Bạn không có tin nhắn nào !!!</h5>
                )}
            </ul>
        </div>
    );
}

export default MenuMessgae;