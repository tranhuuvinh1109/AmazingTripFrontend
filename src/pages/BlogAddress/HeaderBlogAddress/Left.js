import React, { useState } from 'react';
import './Left.scss';
// const [address, setAddress] = useState();
// const [image, setImage] = useState();


function Left() {
    return (
        <div className="left">
            <div className="address">
                <h2 className="name">
                    Hội An  <i className="fa-solid fa-location-dot"></i>
                    <span className="avatar">
                        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/281896920_534554055067659_2103376413571668716_n.jpg?stp=dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=j7BNtyGXhXAAX_hRifl&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLnllXQKcQizy9OEzLQUonG7eViUgPq4ynxejsTjcQClQ&oe=62D02342"
                            alt="" className="avt" />
                    </span>
                </h2>
            </div>

            <div className="star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span>26.692</span>
            </div>
        </div>
    )
}

export default Left;