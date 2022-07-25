import styles from './MostPopular.module.scss';
import classNames from 'classnames/bind';
import { FaStar } from "react-icons/fa";
import { Animator, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const cx = classNames.bind(styles);

const data = [
    {
        address_name: 'Đà Nẵng',
        address_image: 'https://images.pexels.com/photos/2682462/pexels-photo-2682462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        vote: '4.3',
    },
    {
        address_name: 'Hội An',
        address_image: 'https://images.pexels.com/photos/1612461/pexels-photo-1612461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        vote: '4.1',
    },
    {
        address_name: 'Quảng Nam',
        address_image: 'https://images.pexels.com/photos/3722808/pexels-photo-3722808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        vote: '4.1',
    },
    {
        address_name: 'Tp Hồ Chí Minh',
        address_image: 'https://images.pexels.com/photos/2078248/pexels-photo-2078248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        vote: '4.1',
    },
    {
        address_name: 'Hà Nội',
        address_image: 'https://images.pexels.com/photos/984864/pexels-photo-984864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        vote: '4.1',
    },
]

function MostPopular() {
    const stars = Array(5).fill(0);
    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"
    };

    return (
        <div className={cx('container')}>
            <div className={cx('heading')}>
                <Animator animation={batch(Fade(), MoveIn(0, -500))}>
                    <h2 className={cx('title')}>
                        Theo dõi nhiều nhất
                    </h2>
                </Animator>
                <Animator animation={batch(FadeIn())} >
                    <span className={cx('line')}></span>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(-500, 0))}>
                    <h5 className={cx('subtitle')}>
                        Những địa điểm
                        <br />
                        được nhiều người quan tâm, thảo luận, được đánh giá cao nhất.
                    </h5>
                </Animator>
            </div>
            <Animator animation={batch(Fade(), MoveIn(500, 0), MoveOut(0, -200))}>
                <div className={cx('content')}>
                    <div className={cx('card-1')}>
                        <img src={data[0]?.address_image} />
                        <div className={cx('card-des')}>
                            <h5>{data[0]?.address_name}</h5>
                            <span className={cx('card-line')}></span>
                            <div className={cx('card-vote')}>
                                <span>{data[0]?.vote}</span>
                                <div className={cx('card-star')}>
                                    {stars.map((_, index) => {
                                        return (
                                            <FaStar
                                                key={index}
                                                size={20}
                                                color={parseInt(data[0]?.vote) > index ? colors.orange : colors.grey}
                                                style={{ marginRight: '5' }}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('card-2')}>
                        <img src={data[1]?.address_image} />
                        <div className={cx('card-des')}>
                            <h5>{data[1]?.address_name}</h5>
                            <span className={cx('card-line')}></span>
                            <div className={cx('card-vote')}>
                                <span>{data[1]?.vote}</span>
                                <div className={cx('card-star')}>
                                    {stars.map((_, index) => {
                                        return (
                                            <FaStar
                                                key={index}
                                                size={20}
                                                color={parseInt(data[1]?.vote) > index ? colors.orange : colors.grey}
                                                style={{ marginRight: '5' }}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('card-3')}>
                        <img src={data[2]?.address_image} />
                        <div className={cx('card-des')}>
                            <h5>{data[2]?.address_name}</h5>
                            <span className={cx('card-line')}></span>
                            <div className={cx('card-vote')}>
                                <span>{data[2]?.vote}</span>
                                <div className={cx('card-star')}>
                                    {stars.map((_, index) => {
                                        return (
                                            <FaStar
                                                key={index}
                                                size={20}
                                                color={parseInt(data[2]?.vote) > index ? colors.orange : colors.grey}
                                                style={{ marginRight: '5' }}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('card-4')}>
                        <img src={data[3]?.address_image} />
                        <div className={cx('card-des')}>
                            <h5>{data[3]?.address_name}</h5>
                            <span className={cx('card-line')}></span>
                            <div className={cx('card-vote')}>
                                <span>{data[3]?.vote}</span>
                                <div className={cx('card-star')}>
                                    {stars.map((_, index) => {
                                        return (
                                            <FaStar
                                                key={index}
                                                size={20}
                                                color={parseInt(data[3]?.vote) > index ? colors.orange : colors.grey}
                                                style={{ marginRight: '5' }}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('card-5')}>
                        <img src={data[4]?.address_image} />
                        <div className={cx('card-des')}>
                            <h5>{data[4]?.address_name}</h5>
                            <span className={cx('card-line')}></span>
                            <div className={cx('card-vote')}>
                                <span>{data[4   ]?.vote}</span>
                                <div className={cx('card-star')}>
                                    {stars.map((_, index) => {
                                        return (
                                            <FaStar
                                                key={index}
                                                size={20}
                                                color={parseInt(data[4  ]?.vote) > index ? colors.orange : colors.grey}
                                                style={{ marginRight: '5' }}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Animator>
        </div>
    );
}

export default MostPopular;