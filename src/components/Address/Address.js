import React from "react";
import { useState, useEffect } from "react";
import getImage from "../../hooks/getImage";
import styles from "./address.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Address({ address, type, role }) {
    const [image, setImage] = useState(address.address_image);
    let name = address?.address_name;
    useEffect(() => {
        const getImageUrl = async () => {
            if (address.address_image)
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
            {role == 1 ? (
                <Link to={"/address/" + address.address_id}>
                    <img src={image} alt="Image" />
                </Link>
            ) : (
                <Link to={"/address/" + address.address_id}>
                    <img src={image} alt="Image" />
                </Link>
            )}

            

            <h3>{name}</h3>
            {type == "1" ? (
                <></>
            ) : (
                <>
                    <i className="fa-solid fa-users"></i>
                    <div className={cx("amount")}>{address.count}</div>
                </>
            )}

            {type == "3" ? (
                <>
                    <span
                        style={{
                            marginLeft: "12px",
                            color: "#FF751A",
                            fontWeight: "700",
                            fontSize: "24px",
                        }}
                    >
                        {address.discount_rate}%
                    </span>
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

export default Address;
