import Left from './Left';
import { SlideShow } from '../../../components/Layouts/components';
import styles from './CenterAddress.module.scss';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

const img = [
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

const cx = classNames.bind(styles);

function CenterAddress() {
    return (
        <div className={cx('row m-0 ps-1 pe-1')} style={{ maxHeight: '400px' }}>
            <div className={cx('col-sm-4 p-0 pe-2')} style={{ height: '100%' }}>
                <Left />
            </div>
            <div className={cx('col-sm-8 p-0')} style={{ height: '100%' }}>
                <SlideShow
                    autoplaySpeed={2000}
                    arrows={true}
                    dots={true}
                >
                    {img.map((each, index) => (
                        <div className='each-slide' key={index}>
                            <img src={each.imgPath}/>
                        </div>
                    ))}
                </SlideShow>
            </div>
        </div>

    )
}

export default CenterAddress;