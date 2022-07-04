import React, { Fragment, useEffect, useState } from 'react';
import { BlogAddressPost } from '../../../components/Layouts/components';
import blogAddressPostApi from '../../../api/blogAddressPostApi';


function BottomAddress() {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const fetchPostList = async () => {
            try {
               const res = await blogAddressPostApi.getAll();
               setPostData(res.data) 
            } catch (error) {
                console.log('Toang meo chay r loi cc:  ', error)
            }
        }

        fetchPostList();
    },[])

    return (
        <div className="bottom">
            {postData.map((each) => (
                <Fragment key={each.blog_address_id}>
                    <BlogAddressPost postData={each} key={each.blog_address_id}/>
                </Fragment>
            ))}
        </div>
    )
}

export default BottomAddress;