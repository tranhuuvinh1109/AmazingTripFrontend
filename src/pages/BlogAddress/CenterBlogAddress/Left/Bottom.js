import React, { useState } from 'react';
import './Bottom.scss';
// const [start, setStart] = useState();
// const [finish, setFinish] = useState();
// const [discount, setDiscount] = useState();
// const [quantity, setQuantity] = useState();
// const [registed, setRegisted] = useState();


function Bottom() {
    return (
        <div className="center-left-bottom">
            <h4>
                Từ ngày <span className="day1">09/11/2020</span> tới ngày<span className="day2"></span> 22/11/2022
            </h4>
            <p className="block-discount">
                Giảm giá <span className="discount"> 30% </span>
            </p>
            <p className="dess2">
                <span className="quantity">
                    50
                </span> quý khách đầu tiên
            </p>
            <div className="sub">
                <h5 className="submit">
                    Số lượng đã đăng ký: <span className="sb">
                        37/50
                    </span>
                </h5>
                <button className="btn-register">Đăng ký</button>
            </div>
        </div>
    )
}

export default Bottom;