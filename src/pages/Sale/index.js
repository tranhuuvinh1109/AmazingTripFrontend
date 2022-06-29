import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import http from '../../http';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



const cx = classNames.bind(styles);


function Sale() {
        const navigate = useNavigate();
        const location = useLocation()
        const { address_id } = location.state;

        const [inputs, setInputs] = useState({ address_id,  number_registed: 0 });
        const handleChange = (event) => {
                const name = event.target.name;
                const value = event.target.value;
                setInputs(values => ({ ...values, [name]: value }))
        }


        const submitForm = () => {
                console.log(inputs);
                http.post('/discount', inputs).then((res) => {
                        navigate('/');
                })

        }
        return (
                <div>
                        <div className={cx("main-content")}>
                                <div className={cx("container")}>
                                        <div className={cx("image")}>
                                                <h1>
                                                        Cùng gia nhập<br />
                                                        đại gia đình <span className={cx("nameWeb")}>AmazingTrip</span>
                                                </h1>
                                        </div>
                                        <div className={cx("content")}>
                                                <h1>Thêm khuyến mãi </h1>

                                                        <div>
                                                                <label className="">Thời gian bắt đầu</label>
                                                        <input type="date" name="time_start" className={cx("inputForm")}
                                                                value={inputs.time_start || ''}
                                                                        onChange={handleChange} placeholder="Nhập tên địa điểm" />
                                                        </div>
                                                        <div>
                                                                <label>Thời gian kết thúc</label>
                                                                <input type="date" name="time_finish" className={cx("inputForm")}
                                                                        value={inputs.time_finish || ''}
                                                                        onChange={handleChange} placeholder="Nhập vị trí" />


                                                        </div>
                                                <div>
                                                        <label>Mức giảm giá</label>
                                                        <input type="number" name="discount_rate" className={cx("inputForm")}
                                                                value={inputs.discount_rate || ''}
                                                                onChange={handleChange}  />


                                                </div>
                                                <div>
                                                        <label>Số lượng</label>
                                                        <input type="number" name="discount_quantity" className={cx("inputForm")}
                                                                value={inputs.discount_quantity || ''}
                                                                onChange={handleChange}  />


                                                </div>
                                                        <button type="submit" onClick={submitForm} className={cx("submitBtn")}>Thêm</button>
                                        </div>
                                </div>
                        </div></div>
        );

}

export default Sale;