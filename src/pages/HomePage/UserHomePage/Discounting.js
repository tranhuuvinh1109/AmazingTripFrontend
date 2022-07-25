import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import removeCookie from "../../../hooks/removeCookie";
import Slider from "react-slick";
import getCookie from "../../../hooks/getCookie";
import http from "../../../http";

const userData = JSON.parse(getCookie("userin"));

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick} id="landing-arrow" style={{ right: "-25px" }}>
            <div className={"moreinf-cover"}>
                <i className="fa-solid fa-angle-right"></i>
            </div>
        </div>
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick} id="landing-arrow" style={{ left: "-25px" }}>
            <div className="moreinf-cover">
                <i className="fa-solid fa-angle-left"></i>
            </div>
        </div>
    );
}

const settings = {
    infinite: true,
    pauseOnHover: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

function Discounting() {
    const [followings, setFollowings] = useState([]);

    useEffect(() => {
        let fetch = async () => {
            let addresses = await http.get(`/listaddressbydiscount`);
            setFollowings(addresses.data.data);
        };
        fetch();
    }, []);

    return (
        <>
            <div>
                <div>
                    <h1>Đang theo dõi</h1>

                    <Slider {...settings}>
                        {followings.map((address, index) => (
                            <div className="moreinf-each-slide" key={index}>
                                <img src={address.address_name} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Discounting;
