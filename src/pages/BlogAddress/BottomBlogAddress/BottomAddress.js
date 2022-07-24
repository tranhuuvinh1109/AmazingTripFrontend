import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './BottomAddress.module.scss';
import { BlogAddressPost } from '../../../components/Layouts/components';
import { BlogAddressContext } from '../BlogAddressContext';
import { CommentProvider } from '../../../components/Layouts/components/BlogAddressPost/ReactComment/CommentContext';

const cx = classNames.bind(styles);

function BottomAddress() {
    const {id} = useParams();
    const context = useContext(BlogAddressContext);
    
    return (
            <div className={cx('bottom')}>
                {context.postData?.length == 0 ? (
                        <div className={cx('empty-area')}>
                            <h1>
                                Chưa có bình luận nào cả... 
                                <br/>
                                Hãy là người đầu tiên đánh giá về địa điểm này
                            </h1>
                            <button>
                                <Link to={`/address/`+id+`/createBlog`} >
                                    <i className="fa-solid fa-pen"></i> 
                                    Viết bài
                                </Link>
                            </button>
                        </div>
                    ) : 
                    context.postData?.map((each) => (
                        <CommentProvider  key={each.blog_address_id}>
                            <div className={cx('each-post')}>
                                <BlogAddressPost postData={each} slideShow={false}/>
                            </div>
                        </CommentProvider>
                    ))
                } 
            </div>
    )
}

export default BottomAddress;