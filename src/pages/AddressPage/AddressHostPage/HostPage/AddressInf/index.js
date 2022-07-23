import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AddressInf.module.scss';
import { AddressHostPageContext } from '../../AddressHostPageContext';

const cx = classNames.bind(styles);

function AddressInf() {
    const navigate = useNavigate();
    const context = useContext(AddressHostPageContext);
    

    return (
        <div className={cx('description-more')}>
            <div className={cx('sale')}>
                <h2 className={cx('subtitle')}>Khuyến mãi</h2>
                <div className={cx('sale-content')}>
                    {context.discountData ? (
                        <div className={cx('center-left-bottom')}>
                            <h4>
                                Từ ngày 
                                <span className={cx('day-start')}>
                                    {new Date(context.discountData?.time_start).toLocaleDateString()}
                                </span> tới ngày
                                <span className={cx('day-end')}> 
                                    {new Date(context.discountData?.time_finish).toLocaleDateString()}
                                </span>
                            </h4>
                            <p className={cx('block-discount')}>
                                Giảm giá tới 
                                <span className={cx('discount')}> 
                                    {context.discountData?.discount_rate}% 
                                </span>
                            </p>
                            <p className={cx('dess2')}>
                                <span className={cx('quantity')}>
                                    {context.discountData?.discount_quantity}
                                </span> quý khách đầu tiên
                            </p>
                            <div className={cx('sub')}>
                                <h5 className={cx('submit')}>
                                    Số lượng đã đăng ký: 
                                    <span className={cx('sb')}>
                                        {context.discountData?.quantity_registed}
                                        /
                                        {context.discountData?.discount_quantity}
                                    </span>
                                </h5>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h3>
                                Opp ! Chưa có khuyến mãi nào. 
                                <br/>
                                Hãy thêm khuyễn mã để thu hút mọi người nào !!!
                            </h3>
                            <button
                                onClick={() => {
                                    navigate(`/addSale/${context.addressData.address_id}`)
                                }} 
                                className={cx('btn-add')}
                            >
                                <i className='fa-solid fa-circle-plus addSaleInfo'></i>
                            </button>
                        </>
                    )}
                </div>
            </div>

            <div className={cx('statistical')}>
                <h2 className={cx('subtitle')}>Thống kê</h2>
                <div className={cx('content')}>
                    {/* <div>
                        <span>Số lượng bài viết:</span>
                        <span className={cx('amountContent')}>370</span>
                    </div>
                    <div>
                        <span>Số lượng theo dõi:</span>
                        <span className={cx('amountContent')}>5000</span>
                    </div>

                    <div>
                        <span>Lượng tương tác trong ngày:</span>
                        <span className={cx('amountContent')}>10</span>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default AddressInf;