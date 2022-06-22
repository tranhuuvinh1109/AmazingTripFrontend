import { Fragment } from 'react';
import React from 'react';
import BottomAddress from './BottomBlogAddress/BottomAddress';
import HeaderAddress from './HeaderBlogAddress/HeaderAddress';
import CenterAddress from './CenterBlogAddress/CenterAddress';

function BlogAddress() {
    return (
        <Fragment>
            <HeaderAddress />
            <CenterAddress />
            <BottomAddress />
        </Fragment>
    );
}
export default BlogAddress;