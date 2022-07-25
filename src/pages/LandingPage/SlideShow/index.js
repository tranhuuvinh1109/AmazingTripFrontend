import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import './LandingSlideShow.scss';
import Typerwriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import images from '../../../assets/images';

const data = [
    {
        address_name: 'Đà Nẵng',
        address_follow: 90,
        address_image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        address_name: 'Hội An',
        address_follow: 60,
        address_image: 'https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        address_name: 'Huế',
        address_follow: 30,
        address_image: 'https://images.pexels.com/photos/1310788/pexels-photo-1310788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        address_name: 'Quảng Ninh',
        address_follow: 10,
        address_image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
]


function SlideShow() {

    const setting1 = {
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        slidesPerRow: 1,
        pauseOnHover: false,
        nextArrow: false,
        prevArrow: false
    };;



    return (
        <div className='landingss-container'>
            <Slider {...setting1}>
                {data?.map((each, index) => (
                    <div key={index}>
                        <img className='landingss-img' src={each.address_image} />
                    </div>
                ))}
            </Slider>
            <h1 className='landingss-title'>Cùng
                <span>
                    <Typerwriter
                        options={{
                            strings: ['AmazingTrip', 'Bạn bè'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span>
                Khám phá thế giới !!!
            </h1>
        </div>
    );
}

export default SlideShow;