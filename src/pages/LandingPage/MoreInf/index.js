import Slider from "react-slick";
import './MoreInf.scss';
import { Animator, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const data = [
    {
        address_name: 'Đà Nẵng',
        imgPath: 'https://images.pexels.com/photos/3355788/pexels-photo-3355788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        address_discount: '70',
    },
    {
        address_name: 'Quảng Ninh',
        imgPath: 'https://images.pexels.com/photos/9578724/pexels-photo-9578724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        address_discount: '60',
    },
    {
        address_name: 'Hội An',
        imgPath: 'https://images.pexels.com/photos/9839859/pexels-photo-9839859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        address_discount: '50',
    },
    {
        address_name: 'Huế',
        imgPath: 'https://images.pexels.com/photos/3889928/pexels-photo-3889928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        address_discount: '30',
    },
    {
        address_name: 'Nha Trang',  
        imgPath: 'https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        address_discount: '10',
    },
]

function NextArrow(props) {

    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            id='landing-arrow'
            style={{ right: '-25px' }}
        >
            <div className={'moreinf-cover'}>
                <i className="fa-solid fa-angle-right"></i>
            </div>
        </div>
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            id='landing-arrow'
            style={{ left: '-25px' }}
        >
            <div className='moreinf-cover'>
                <i className="fa-solid fa-angle-left"></i>
            </div>
        </div>
    );
}


function MoreInf() {

    const settings = {
        infinite: true,
        lazyLoad: true,
        pauseOnHover: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className='moreinf-container'>
            <div className='moreinf-heading'>
                <Animator animation={batch(Fade(), MoveIn(-500, 0))}>
                    <h2 className='moreinf-title'>
                        Đang giảm giá
                    </h2>
                </Animator>
                <Animator animation={batch(Fade())}>
                    <span className='moreinf-line'></span>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(500, 0))}>
                    <h5 className='moreinf-subtitle'>
                        Những khuyến mãi cực khủng
                        <br />
                        đang chờ đón bạn, còn ngại ngần gì mà không đăng ký ngay !
                    </h5>
                </Animator>
            </div>
            <Animator animation={batch(Fade(), MoveIn(0, 1000), MoveOut(0, -500))}>
                <div className='moreinf-content'>
                    <Slider {...settings}>
                        {data?.map((each, index) => (
                            <div className='moreinf-each-slide' key={index}>
                                <img src={each.imgPath} />
                                <div className='moreinf-card-des'>
                                    <h5>{each?.address_name}</h5>
                                    <span className='moreinf-discount'>
                                        {each.address_discount}
                                        <i className="fa-duotone fa-percent"></i>
                                    </span>
                                </div>
                            </div>

                        ))}
                    </Slider>
                </div>
            </Animator>
        </div>
    );
}

export default MoreInf;