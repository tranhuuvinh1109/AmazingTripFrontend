import React from 'react';
import BottomAddress from './BottomBlogAddress/BottomAddress';
import HeaderAddress from './HeaderBlogAddress/HeaderAddress';
import CenterAddress from './CenterBlogAddress/CenterAddress';
import './BlogAddress.scss';

function BlogAddress() {
    return (
        <div className="col-sm-8 mb-4" id="body-content">
            <HeaderAddress />
            <CenterAddress />
            <BottomAddress />
        </div>
    );
}
export default BlogAddress;