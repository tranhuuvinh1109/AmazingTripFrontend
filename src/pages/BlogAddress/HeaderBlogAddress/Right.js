import { useState , useEffect, useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import classNames from 'classnames/bind';
import styles from './Right.module.scss';
import bookmarkApi from '../../../api/bookmarkApi';
import getCookie from '../../../hooks/getCookie';
import { GlobalContext } from '../../../context/GlobalContext';
import { BlogAddressContext } from '../BlogAddressContext';

const cx = classNames.bind(styles);

function Right() {
    const {id} = useParams();
    const userData = JSON.parse(getCookie('userin'));
    const globalContext = useContext(GlobalContext);
    const context = useContext(BlogAddressContext);

    const handleBookmark = async () => {
        let inputData = {
            address_id: id,
            id_user: userData.id,
            status: '0',
        }
        if(context.bookmarkData.status == '1')
        {
            toast.warning('Xóa địa điểm khỏi mục ưa thích !!!', {
                toastId: 1,
            });
            globalContext.handleResetBookmarkData(id);
        } else {
            inputData.status = '1';
            toast.success('Đã thêm địa điểm vào mục ưa thích !!!', {
                toastId: 2,
            });
        }

        try {
            const res = await bookmarkApi.post(inputData);
            context.setBookmarkData({ ...context.bookmarkData, status: res.data.status, });
            if(res.data.status == 1)
            {
                globalContext.setBookmarkData([...globalContext.bookmarkData, 
                {
                    address_id: id,
                    address_name: context.addressData.address_name
                }]);
            }
        } catch (error) {
            console.log('Toang meo chay r loi cc: ', error);
        }
    }

    return (
        <div className={cx('right')}>
            <div className={cx('btn-book')}>
                <button 
                    className={cx('btn')}
                    onClick={() => handleBookmark()}
                >
                    <i 
                        className={context.bookmarkData?.status == '1' ? "fa-solid fa-bookmark me-1" : "fa-regular fa-bookmark me-1"}
                    ></i> Bookmark
                </button>
            </div>
            <div className={cx('btn-write')}>
                <button className={cx('btn')}>
                    <Link to={`/address/`+id+`/createBlog`} >
                        <i className="fa-solid fa-pen me-1"></i> 
                        Viết bài
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Right;