import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import removeCookie from "../../../hooks/removeCookie";
import Slider from "react-slick";
import getCookie from "../../../hooks/getCookie";
import http from "../../../http";
import Addresses from "./Addresses";

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
            <Addresses />
        </>
    );
}

export default UserHomePage;
