import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Right } from "../../../components/Layouts/components";
import HostPage from "./HostPage";
import { AddressHostPageContext } from "./AddressHostPageContext";
import getCookie from "../../../hooks/getCookie";
import addressApi from "../../../api/addressApi";
import getImage from "../../../hooks/getImage";

function AddressHostPage() {
    const navigate = useNavigate();
	const { id } = useParams();
	const context = useContext(AddressHostPageContext);

	const userData = JSON.parse(getCookie('userin'))

	useEffect(() => {
		const fetchAddressData = async () => {
			try {
				const res = await addressApi.getHost(id, userData.id);
				if(res.data.address_image !== undefined)
				{
					const image = await getImage(res.data.address_image);
					res.data.address_image = image;
				}
				context.setAddressData(res.data);
                context.setDiscountData(res.discount);
			} catch (error) {
				navigate(-1);
				toast.error('Khong tim thay dia diem !!!', {
					toastId: 1,
				});
			}
		};

		fetchAddressData();
	}, []);

    return ( 
        <div className='row m-0 ps-1 pe-1'>
            <div className="col-sm-10 pt-1 mb-4" id="body-content">
                <HostPage />
            </div>
            
            <div className="col-sm-2 ps-0 pe-1">
                <Right />
            </div>
        </div>
    );
}

export default AddressHostPage;