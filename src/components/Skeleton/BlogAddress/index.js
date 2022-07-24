import styles from './BlogAddress.module.scss';
import classNames from 'classnames/bind';
import Skeleton from 'react-loading-skeleton';

const cx = classNames.bind(styles);

function BlogAddressSkeleton() {
    return ( 
        <>
            <div className='row m-0 ps-1 pe-1'>
                <div className="d-flex justify-content-between p-1 mb-2">
                    <div className={cx('left')}>
                        <div className={cx('address')}>
                            <Skeleton width={270} height={40} />
                            <Skeleton className='ms-2' circle width={40} height={40} />
                        </div>
                        <div className={cx('star')}>
                            <Skeleton width={150} height={25} />
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('btn-book')}>
                            <Skeleton width={120} height={30} />
                        </div>
                        <div className={cx('btn-write')}>
                            <Skeleton width={120} height={30} />
                        </div>
                    </div>
                </div>
                <div className={cx('center')}>
                    <div className={cx('p-0 pe-2')}>
                        <div className={cx('container')}>
                            <div className={cx('top-content')}>
                                <div className={cx('center-left-top')}>
                                    <Skeleton width={100} height={35} />        
                                    <Skeleton width={400} height={20} count={5} />
                                </div>
                            </div>
                            <div className={cx('bottom-content')}>
                                <div className={cx('center-left-bottom')}>
                                    <Skeleton width={400} height={25} />   
                                    <Skeleton width={150} height={30} />  
                                    <Skeleton width={200} height={35} />  
                                    <div className={cx('sub')}>
                                        <Skeleton width={270} height={40} /> 
                                        <Skeleton width={100} height={40} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('p-0')}>
                        <Skeleton width={890} height={400} /> 
                    </div>
                </div>

            </div>
            <div className='row m-0 ps-1 pe-1 mt-3'>
                <div className="col-sm-2 ps-0 pe-0 mb-2">
                    <>
                        <div className={cx('mb-2')}>
                            <Skeleton width={230} height={50} /> 
                        </div> 
                        <ul className={cx('sticky-side-bar')}>
                            <li
                                className={cx('mb-2')}
                            >
                                <Skeleton width={230} height={50} />
                                {/* <ListItem 
                                    location={content.id === 'location-list'}
                                    openStatus={openStatus} 
                                    activedList={actived.includes(content.id)} 
                                /> */}
                            </li>
                            <li
                                className={cx('mb-2')}
                            >
                                <Skeleton width={230} height={50} />
                                {/* <GroupList activedList={actived.includes('2')} /> */}
                            </li>
                        </ul>
                    </>
                </div>
    
                <div className="col-sm-8">
                    <div className={cx('feedback-blog')}>
                        <div className={cx('user-post')}>
                            <div className={cx('user-infor')}>
                                <div>
                                    <Skeleton circle width={50} height={50} />
                                    <h4 className={cx('m-0')}>
                                        <Skeleton width={165} height={33} />
                                        <Skeleton width={200} height={18} />                   
                                    </h4>
                                </div>
                                <button className={cx('btn-more')}>
                                    <i className={cx('fa-solid fa-ellipsis icon-more')}></i>
                                </button>
                            </div>
                            <Skeleton width={125} height={20} />
                        </div>
                        <div className={cx('post-content')}>
                            <Skeleton width={800} height={20} count={3} />
                            <div className={cx('post-img')}>
                                <Skeleton width={700} height={350} />
                            </div> 
                            <>
                                <div className={cx('post-reaction')}>
                                    <div className={cx('d-flex')}>
                                        <Skeleton width={75} height={30} />
                                    </div>

                                    <Skeleton width={100} height={30} />
                                </div>

                                <div className='comments'>
                                    <div className={cx('user-comment')}>
                                        <div className=''>
                                            <Skeleton circle width={50} height={50} />
                                        </div>
                                        <div className={cx('input-comment')}>
                                            <Skeleton width={730} height={50} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                    <div className={cx('feedback-blog')}>
                        <div className={cx('user-post')}>
                            <div className={cx('user-infor')}>
                                <div>
                                    <Skeleton circle width={50} height={50} />
                                    <h4 className={cx('m-0')}>
                                        <Skeleton width={165} height={33} />
                                        <Skeleton width={200} height={18} />                   
                                    </h4>
                                </div>
                                <button className={cx('btn-more')}>
                                    <i className={cx('fa-solid fa-ellipsis icon-more')}></i>
                                </button>
                            </div>
                            <Skeleton width={125} height={20} />
                        </div>
                        <div className={cx('post-content')}>
                            <Skeleton width={800} height={20} count={3} />
                            <div className={cx('post-img')}>
                                <Skeleton width={700} height={350} />
                            </div> 
                            <>
                                <div className={cx('post-reaction')}>
                                    <div className={cx('d-flex')}>
                                        <Skeleton width={75} height={30} />
                                    </div>

                                    <Skeleton width={100} height={30} />
                                </div>

                                <div className='comments'>
                                    <div className={cx('user-comment')}>
                                        <div className=''>
                                            <Skeleton circle width={50} height={50} />
                                        </div>
                                        <div className={cx('input-comment')}>
                                            <Skeleton width={730} height={50} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                    <div className={cx('feedback-blog')}>
                        <div className={cx('user-post')}>
                            <div className={cx('user-infor')}>
                                <div>
                                    <Skeleton circle width={50} height={50} />
                                    <h4 className={cx('m-0')}>
                                        <Skeleton width={165} height={33} />
                                        <Skeleton width={200} height={18} />                   
                                    </h4>
                                </div>
                                <button className={cx('btn-more')}>
                                    <i className={cx('fa-solid fa-ellipsis icon-more')}></i>
                                </button>
                            </div>
                            <Skeleton width={125} height={20} />
                        </div>
                        <div className={cx('post-content')}>
                            <Skeleton width={800} height={20} count={3} />
                            <div className={cx('post-img')}>
                                <Skeleton width={700} height={350} />
                            </div> 
                            <>
                                <div className={cx('post-reaction')}>
                                    <div className={cx('d-flex')}>
                                        <Skeleton width={75} height={30} />
                                    </div>

                                    <Skeleton width={100} height={30} />
                                </div>

                                <div className='comments'>
                                    <div className={cx('user-comment')}>
                                        <div className=''>
                                            <Skeleton circle width={50} height={50} />
                                        </div>
                                        <div className={cx('input-comment')}>
                                            <Skeleton width={730} height={50} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
    
                <div className="col-sm-2 ps-0 pe-0 mb-2">
                    <ul className={cx('sticky-side-bar')}>
                        <li className={cx('mb-2')} >
                            <Skeleton width={230} height={50} />
                        </li>
                        <li className={cx('mb-2')} >
                            <Skeleton width={230} height={50} />
                        </li>
                        <li className={cx('mb-2')} >
                            <Skeleton width={230} height={50} />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default BlogAddressSkeleton;