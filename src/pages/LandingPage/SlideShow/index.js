import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import './LandingSlideShow.scss';
import { useNavigate, Link } from 'react-router-dom';

const data = [
    {
        address_name: 'Đà Nẵng',
        address_follow: 90,
        address_image: 'https://digialai.com/dlg_media/2021/08/01-top-10-diem-den-du-lich-chup-anh-dep-nhat-viet-nam-hoi-an-1024x678.jpg',
    },
    {
        address_name: 'Hội An',
        address_follow: 60,
        address_image: 'https://vcdn-dulich.vnecdn.net/2020/01/08/sac-mau-cua-bien-vnexpress-1-6641-1578454676.jpg',
    },
    {
        address_name: 'Huế',
        address_follow: 30,
        address_image: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2017/8/28/551691/Du-Lich_1.jpg',
    },
    {
        address_name: 'Quảng Ninh',
        address_follow: 10,
        address_image: 'https://linhhungtourist.com.vn/wp-content/uploads/2019/03/1551111810-291-2-1551079327-width650height433.jpg',
    },
]


function SlideShow() {
    const navigate = useNavigate();
    const slider1 = useRef();
    const slider2 = useRef();

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const setting1 = {
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        slidesPerRow: 1,
        nextArrow: false,
        prevArrow: false
    };

    const setting2 = {
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        slidesPerRow: 1,
        nextArrow: false,
        prevArrow: false
    };

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, [])


    return (
        <div className='landingss-container'>
            <Slider
                asNavFor={nav2}
                ref={slider1}
                {...setting1}
            >
                {data?.map((each, index) => (
                    <div key={index}>
                        <img className='landingss-img' src={each.address_image} />
                    </div>
                ))}
            </Slider>
            {/* <div className='landingss-slide2'>
                <Slider
                    asNavFor={nav1}
                    ref={slider2}
                    {...setting2}
                >
                    {data?.map((each, index) => (
                        <div key={index} className='landingss-title'>
                            <div className='landingss-title-name'>
                                <h6>{each.address_name}</h6>
                            </div>
                            <div className='landingss-title-follow'>
                                <h6>{each.address_follow}</h6>
                            </div>
                            <div className='landingss-btn'>
                                <Link to='/login'> Go now! </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div> */}
        </div>
    );
}

export default SlideShow;