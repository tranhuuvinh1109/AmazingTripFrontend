import Slider from 'react-slick';
import './SlideShow.scss';


function NextArrow(props) {
    const { className, arrow, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        id='next-arrow'
        style={ arrow ? {} : {display: 'none',}}
      />
    );
}
  
  function PrevArrow(props) {
    const { className, arrow, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        id='prev-arrow'
        style={ arrow ? {} : {display: 'none',}}
      />
    );
}


function SlideShow({autoplaySpeed, dots, arrows , children}) {

    const settings = {
        customPaging: function(i) {
            return (
              <div className='slide-custom-paging'>
                {i}
              </div>
            );
        },
        dotsClass: "slick-dots line-indicator",
        dots: dots,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: autoplaySpeed,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow arrow={arrows} />,
        prevArrow: <PrevArrow arrow={arrows} />
    };

    return (  
        <div className='slide-container'>
            <Slider {...settings}>
                {children}

                {/* <div className='each-slide'>
                    <img src="https://digialai.com/dlg_media/2021/08/01-top-10-diem-den-du-lich-chup-anh-dep-nhat-viet-nam-hoi-an-1024x678.jpg"></img>
                </div>
                <div className='each-slide'>
                    <img src="https://vcdn-dulich.vnecdn.net/2020/01/08/sac-mau-cua-bien-vnexpress-1-6641-1578454676.jpg"></img>
                </div>
                <div className='each-slide'>
                    <img src="https://media-cdn-v2.laodong.vn/storage/newsportal/2017/8/28/551691/Du-Lich_1.jpg"></img>
                </div>
                <div className='each-slide'>
                    <img src="https://linhhungtourist.com.vn/wp-content/uploads/2019/03/1551111810-291-2-1551079327-width650height433.jpg"></img>
                </div>
                <div className='each-slide'>
                    <img src="https://media.vov.vn/uploaded/ja7idye43pa/2017_07_23/hoi_an_lot_top_anh_dep_du_lich_the_gioi_1_jvin.jpg"></img>
                </div> */}
            </Slider>
        </div>
    );
}

export default SlideShow;