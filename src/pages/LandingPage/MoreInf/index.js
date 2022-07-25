import Slider from "react-slick";
import './MoreInf.scss';
import { Animator, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const data = [
    {
        imgPath: 'https://digialai.com/dlg_media/2021/08/01-top-10-diem-den-du-lich-chup-anh-dep-nhat-viet-nam-hoi-an-1024x678.jpg',
    },
    {
        imgPath: 'https://vcdn-dulich.vnecdn.net/2020/01/08/sac-mau-cua-bien-vnexpress-1-6641-1578454676.jpg',
    },
    {
        imgPath: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2017/8/28/551691/Du-Lich_1.jpg',
    },
    {
        imgPath: 'https://linhhungtourist.com.vn/wp-content/uploads/2019/03/1551111810-291-2-1551079327-width650height433.jpg',
    },
    {
        imgPath: 'https://media.vov.vn/uploaded/ja7idye43pa/2017_07_23/hoi_an_lot_top_anh_dep_du_lich_the_gioi_1_jvin.jpg',
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
                            </div>
                        ))}
                    </Slider>
                </div>
            </Animator>
        </div>
    );
}

export default MoreInf;