import classNames from "classnames/bind";
import styles from "./UserListAddresses.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import http from "../../../http";
import Slider from "react-slick";
import Address from "../../../components/Address/Address";
import { Link } from "react-router-dom";
import { useContext } from "react";

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
    const [mostFollows, setmostFollows] = useState([]);
    const globalContext = useContext(GlobalContext);
    const [discounts, setDiscounts] = useState([]);
    useEffect(() => {
        let fetch = async () => {
            let addressesBm = await http.get(`/listaddressbybookmark`);
            setmostFollows(addressesBm.data.data);
            let addressesDc = await http.get(`/listaddressbydiscount`);
            setDiscounts(addressesDc.data.data);
        };
        fetch();
    }, []);

    return (
        <div className={cx("userListAddresses")}>
            <div className={cx("lists")}>
                <div className={cx("category")}>
                    <span className={cx("title")}>Đang theo dõi</span>
                    <hr />
                </div>
                <Slider {...settings}>
                    {globalContext.bookmarkData?.map((following, index) => (
                        <Address key={index} address={following} type="1" />
                    ))}
                </Slider>
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
