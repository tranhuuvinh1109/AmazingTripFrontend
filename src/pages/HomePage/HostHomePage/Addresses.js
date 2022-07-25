import classNames from "classnames/bind";
import styles from "./UserListAddresses.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import http from "../../../http";
import Slider from "react-slick";
import Address from "../../../components/Address/Address";
import { Link } from "react-router-dom";
import getCookie from "../../../hooks/getCookie";

const cx = classNames.bind(styles);

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#bbb",
                borderRadius: "50%",
                marginTop: "-30px",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#bbb",
                borderRadius: "50%",
                marginTop: "-30px",
            }}
            onClick={onClick}
        />
    );
}

const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
};

function Addresses() {
    const userData = JSON.parse(getCookie("userin"));
    const [discounts, setDiscounts] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [mostFollows, setmostFollows] = useState([]);
    useEffect(() => {
        let fetch = async () => {
            let addressesBm = await http.get(`/listaddressbybookmark`);
            setmostFollows(addressesBm.data.data);
        };
        fetch();
    }, []);
    useEffect(() => {
        let fetch = async () => {
            let addressesDc = await http.get(`/listaddressbydiscount`);
            setDiscounts(addressesDc.data.data);
        };
        fetch();
    }, []);
    useEffect(() => {
        let fetch = async () => {
            let addressesHost = await http.get(`/addressHost/${userData.id}`);
            setAddresses(addressesHost.data.data);
        };
        fetch();
    }, []);

    return (
        <div className={cx("userListAddresses")}>
            <div className={cx("lists")}>
                <div className={cx("category")}>
                    <span className={cx("title")}>Địa điểm của bạn</span>
                    <hr />
                </div>
                <h3
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Link to={"/createAddress/" + userData.id}>
                        <span
                            style={{
                                marginLeft: "50px",
                                color: "#FF751A",
                                marginRight: "6px",
                                cursor: "pointer",
                            }}
                        >
                            Tạo{" "}
                        </span>
                    </Link>
                    địa điểm của bạn
                </h3>
                <div className={cx('address-list')}>
                    {addresses?.map((address, index) => (
                        <Address key={index} address={address} type="1" role="1" />
                    ))}
                </div>
            </div>
            <div className={cx("lists")}>
                <div className={cx("category")}>
                    <span className={cx("title")}>Theo dõi nhiều nhất</span>
                    <hr />
                </div>
                <Slider {...settings}>
                    {mostFollows?.map((following, index) => (
                        <Address key={index} address={following} />
                    ))}
                </Slider>
            </div>

            <div className={cx("lists")}>
                <div className={cx("category")}>
                    <span className={cx("title")}>Đang khuyến mãi</span>
                    <Link to={"/discountAddresses"}></Link>
                    <hr />
                </div>

                {discounts.length === 0 ? (
                    <h3>Chưa có địa điểm giảm giá</h3>
                ) : (
                    <Slider {...settings}>
                        {discounts?.map((following, index) => (
                            <Address key={index} address={following} type="3" />
                        ))}
                    </Slider>
                )}
            </div>
        </div>
    );
}

export default Addresses;
