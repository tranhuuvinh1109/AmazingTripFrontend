import { Fragment } from 'react';
import { BlogAddressPost } from '../../../components/Layout/components';

function CenterContent() {
    return ( 
        <Fragment>
            <BlogAddressPost />
            <BlogAddressPost />
            <BlogAddressPost />
        </Fragment>
    );
}

export default CenterContent;