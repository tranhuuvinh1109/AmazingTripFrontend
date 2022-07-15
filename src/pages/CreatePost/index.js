import classNames from 'classnames/bind';
import styles from './CreatePost.module.scss';
import { SlideShow, BlogAddressPost } from '../../components/Layouts/components';
import LeftContent from './LeftContent';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import blogAddressPostApi from '../../api/blogAddressPostApi';

const cx = classNames.bind(styles);

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


function CreatePost() {
    const {id} = useParams();
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const fetchPostList = async () => {
            try {
                const res = await blogAddressPostApi.get(id);
                setPostData(res.data);
            } catch (error) {
                console.log('Toang meo chay r loi cc:  ', error)
            }
        }

        fetchPostList();
    },[])

    return ( 
        <div className={cx('body-content')}>
            <div className={cx('left-content')}>
                <LeftContent /> 
            </div>
            <div className={cx('right-content')}>
                <div className={cx('slide-show')}>
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
                <div className={cx('comment')}>
                    <div>
                        <h2> Bình luận gần đây </h2>
                        <div style={{ width: '50vw' }}>
                            {postData[0] && (
                                <SlideShow
                                    autoplaySpeed={3000}
                                    arrows={false}
                                    dots={false}
                                >
                                   { postData.map((each) => (
                                        <BlogAddressPost key={each.blog_address_id} postData={each} slideShow={true}/>
                                    ))}
                                </SlideShow>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;