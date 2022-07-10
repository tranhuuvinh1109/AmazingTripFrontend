import { Fragment, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Right } from '../../components/Layouts/components';
import CenterContent from './CenterContent';
import LeftContent from './LeftContent';
import CoverImage from './CoverImage';
import { GroupPageContext } from './GroupPageContext';
import CreatePost from './CreatePost';
import groupApi from '../../api/groupApi';
import getImage from '../../hooks/getImage';

function UserPage() {
    const context = useContext(GroupPageContext)

    const { id } = useParams();

    useEffect(() => {
        const fetchGroupData = async () => {
            try {
                const res = await groupApi.get(id);
                context.setGroupData(res.data);
                const image = await getImage(res.data.group_image);
                context.setImageUrl(image);
                const leadAva = await getImage(res.data.admin_image);
                context.setLeadAva(leadAva);
            } catch (error) {
                console.log('Toang meo chay r loi cc ', error)
            }
        };

        fetchGroupData();
    }, [])

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
            { context.showForm && <CreatePost /> }
        </Fragment>
    );
}

export default UserPage;