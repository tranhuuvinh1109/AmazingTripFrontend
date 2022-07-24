import React from "react";
import { useState, useEffect } from "react";
import getImage from "../../hooks/getImage";
import styles from "./address.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Address({ address }) {
    const [image, setImage] = useState(address.address_image);
    let name = address.address_name;
    useEffect(() => {
        const getImageUrl = async () => {
            if (!image.includes("http")) {
                const res = await getImage(address.address_image);
                setImage(res);
            }
        };
        getImageUrl();
    }, []);

    if (name.length >= 15) {
        name = name.substring(0, 15).concat("...");
    }
    return (
        <div className={cx("address")}>
            <Link to={"/address/" + address.address_id}>
                <img src={image} alt="Image" />
            </Link>
            <h3>{name}</h3>
            <i className="fa-solid fa-users"></i>
            <div className={cx("amount")}>{address.count}</div>
        </div>
    );
}

export default Address;
