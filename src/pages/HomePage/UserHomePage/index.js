import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import removeCookie from "../../../hooks/removeCookie";
import Slider from "react-slick";
import getCookie from "../../../hooks/getCookie";
import http from "../../../http";
import Following from "./Following";
import Discounting from "./Discounting";
import MostFollower from "./MostFollower";

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

function UserHomePage() {
    const navigate = useNavigate();
    const handlerLogout = () => {
        removeCookie("userin");
        toast.info("Đăng xuất thành công !!!", {
            toastId: 1,
        });
        navigate("/landing");
    };

    return (
        <>
            {/* <div style={{ height: "1000px" }}>
                <h1>
                    <Link to >User Home Page</Link>
                    <br />
                    <Link to="/listAddresses">Danh sách địa điểm</Link>
                    <br />
                    <button onClick={() => handlerLogout()}>Đăng xuất</button>
                    <br />
                </h1>
            </div> */}

            <Following />
        </>
    );
}

export default UserHomePage;
