import BlogAddress from "../BlogAddress";
import HostPage from "../HostPage";
import getCookie from "../../hooks/getCookie";


function AddressPage() {
    const userData = JSON.parse(getCookie('userin'));

    return ( 
        <>
            {userData.role == '1' ? 
                <HostPage />
                :
                <BlogAddress />
            }
        </>
    );
}

export default AddressPage;