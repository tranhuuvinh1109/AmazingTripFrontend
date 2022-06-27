import { Fragment, useContext } from 'react';
import { Right } from '../../components/Layouts/components';
import CenterContent from './CenterContent';
import LeftContent from './LeftContent';
import CoverImage from './CoverImage';
import { CreatePostContext } from './CreatePostContext';
import CreatePost from './CreatePost';

function UserPage() {
    const formContext = useContext(CreatePostContext)

    return (  
        <Fragment>
            <div className='row m-0'>
                <CoverImage />
            </div>
            <div className='row m-0 pt-3'>
                <div className="col-sm-2 ps-1 pe-0">
                    <LeftContent />
                </div>
                
                <div className="col-sm-8 mb-4" id="body-content">
                    <CenterContent />
                </div>
                
                <div className="col-sm-2 ps-0 pe-1">
                    <Right/>
                </div>
            </div>
            { formContext.showForm && <CreatePost /> }
        </Fragment>
    );
}

export default UserPage;