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
import getCookie from '../../hooks/getCookie';

function BlogAddress() {
    const context = useContext(BlogAddressContext);
    const userData = JSON.parse(getCookie('userin'));
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const fetchAddressList = async () => {
            try {
                const res = await addressApi.get(id, userData.id);
                if(res.address?.avatar !== null)
                {
                    const image = await getImage(res.address.avatar);
                    res.address.avatar = image;
                }
                res.friendList?.map( async (friend) => {
                    const image = await getImage(friend.avatar);
                    friend.avatar = image;
                })
                context.setAddressData(res.address);
                context.setGroupList(res.group);
                context.setDiscountData(res.discount);
                context.setFriendList(res.friendList);
                context.setPostData(res.blog);
                context.setBookmarkData({...res.bookmarkData, 
                    address_id: id,
                    id_user: userData.id,
                    status: res.bookmark?.status,
                });
                setLoading(false);
            } catch (error) {
                console.log('Toang meo chay r loi cc ', error)
            }
        };
        fetchAddressList();
    }, [id])

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