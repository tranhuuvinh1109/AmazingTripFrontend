import { Fragment, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './CenterContent.module.scss';
import BlogGroupPost from '../../../components/Layouts/components/BlogGroupPost';
import { GroupPageContext } from '../GroupPageContext';
import blogGroupApi from '../../../api/blogGroupApi';

const cx = classNames.bind(styles);

function CenterContent() {
    const context = useContext(GroupPageContext);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchPostList = async () => {
            try {
                const res = await blogGroupApi.get(id);
                context.setPostData(res.data); 
            } catch (error) {
                console.log('Toang meo chay r loi cc:  ', error)
            }
        }
        
        fetchPostList();
    }, [])

    return ( 
        <Fragment>
            <div className={cx('heading')}>
                <div className={cx('create-post')}>
                    <button
                        onClick={ context.toggleForm } 
                        id='btn-create'
                    >
                        <i className="fa-solid fa-pen"></i>
                        <span>Tạo bài viết</span>
                    </button>
                </div>
                <div className={cx('leave-group')}>
                    <button id='btn-leave'>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        <span>Rời nhóm</span>
                    </button>
                </div>
            </div>
            <div className="bottom">
                {context.postData?.length == 0 ? (
                        <div className={cx('empty-area')}>
                            <h1>
                                Chưa có bài viết nào cả... 
                                <br/>
                                Hãy là người đầu tiên chia sẻ với mọi người !!!
                            </h1>
                        </div>
                    ) : 
                    context.postData?.map((each) => (
                        <BlogGroupPost postData={each} key={each.blog_id}/>
                    ))
                }      
            </div>
        </Fragment>
    );
}

export default CenterContent;