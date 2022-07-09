import { Fragment, useContext, useState, useEffect } from 'react';
import BottomAddress from './BottomBlogAddress/BottomAddress';
import HeaderAddress from './HeaderBlogAddress';
import CenterAddress from './CenterBlogAddress';
import DiscountForm from './DiscountForm';
import { FormCreateNewGroupContext } from './CreateNewGroupContext';
import { BlogAddressContext } from './BlogAddressContext';
import { Left, Right, Paginate } from '../../components/Layouts/components';
import CreateFormNewGroup from './CreateFormNewGroup';
import { useParams } from 'react-router-dom';

function BlogAddress() {

    const formContext = useContext(BlogAddressContext)
    const createNewGroup = useContext(FormCreateNewGroupContext)
    
    return (
        // <BlogAddressProvider>
        <Fragment>
            <div className='row m-0 ps-1 pe-1'>
                <HeaderAddress  />
                <CenterAddress />
            </div>
            <div className='row m-0 ps-1 pe-1 mt-3'>
                <div className="col-sm-2 ps-0 pe-0 mb-2">
                    <Left />
                </div>

                <div className="col-sm-8">
                    <BottomAddress/>
                    <Paginate />
                </div>

                <div className="col-sm-2 ps-0 pe-0 mb-2">
                    <Right />
                </div>
            </div>
            {formContext.showForm && <DiscountForm />}
            {createNewGroup.showCreate && <CreateFormNewGroup />}
        </Fragment>
        // </BlogAddressProvider>
    );
}
export default BlogAddress;