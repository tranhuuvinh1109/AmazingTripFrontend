import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './SlideShow.scss';


function NextArrow(props) {

    const { className, arrow, showUi, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            id='next-arrow'
            style={ arrow && showUi ? {} : {display: 'none',}}
        >
            <i className="fa-solid fa-circle-chevron-right"/>
        </div>
    );
}
  
  function PrevArrow(props) {
    const { className, arrow, showUi, onClick } = props;
    return (
        <div
        className={className}
        onClick={onClick}
        id='prev-arrow'
        style={ arrow && showUi ? {} : {display: 'none',}}
        >
            <i className="fa-solid fa-circle-chevron-left"/>
        </div>
    );
}


function SlideShow({autoplaySpeed, dots, arrows, children}) {
    const slideRef = useRef();
    const [showUi, setShowUi] = useState(false);
    
    const settings = {
        customPaging: function(i) {
            return (
              <div className='slide-custom-paging'>
                {i}
              </div>
            );
        },
        dotsClass: "slick-dots line-indicator",
        dots: dots && showUi,
        fade: true,
        infinite: true,
        pauseOnHover: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: autoplaySpeed,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow arrow={arrows} showUi={showUi} />,
        prevArrow: <PrevArrow arrow={arrows} showUi={showUi} />
    };

    return (  
        <div 
            ref={slideRef}
            className='slide-container'
            onMouseOver={() => setShowUi(true)}
            onMouseLeave={() => setShowUi(false)}
        >
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}

export default SlideShow;