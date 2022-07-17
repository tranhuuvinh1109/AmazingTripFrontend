import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BottomAddress from './BottomBlogAddress/BottomAddress';
import HeaderAddress from './HeaderBlogAddress';
import CenterAddress from './CenterBlogAddress';
import DiscountForm from './DiscountForm';
import { FormCreateNewGroupContext } from './CreateNewGroupContext';
import { Left, Right, Paginate } from '../../components/Layouts/components';
import CreateFormNewGroup from './CreateFormNewGroup';
import { BlogAddressContext } from './BlogAddressContext';
import addressApi from '../../api/addressApi';
import { BlogAddressSkeleton } from '../../components/Skeleton';
import getImage from '../../hooks/getImage';

function BlogAddress() {
    const context = useContext(BlogAddressContext);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const fetchAddressList = async () => {
            try {
                const res = await addressApi.get(id);
                if(res.data.avatar !== undefined)
                {
                    const image = await getImage(res.data.avatar);
                    res.data.avatar = image;
                }
                context.setAddressData(res.data);
                context.setGroupList(res.group);
                context.setDiscountData(res.discount);
                context.setPostData(res.blog);
                setLoading(false);
            } catch (error) {
                console.log('Toang meo chay r loi cc ', error)
            }
        };
        fetchAddressList();
    }, [])

    const createNewGroup = useContext(FormCreateNewGroupContext)
    
    return (
        <>
            {loading ? (
                <BlogAddressSkeleton />
            ) : (
                <>
                    <div className='row m-0 ps-1 pe-1'>
                        <HeaderAddress />
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
                    {context.showForm && <DiscountForm />}
                    {createNewGroup.showCreate && <CreateFormNewGroup />}
                </>
            )}
        </>
    );
}
export default BlogAddress;