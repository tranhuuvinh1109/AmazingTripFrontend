import BlogAddress from "../BlogAddress";
import AddressHostPage from "./AddressHostPage";
import { AddressHostPageProvider } from "./AddressHostPage/AddressHostPageContext";
import getCookie from "../../hooks/getCookie";


function AddressPage() {
    const userData = JSON.parse(getCookie('userin'));

    return ( 
        <AddressHostPageProvider>
            <>
                {userData.role == '1' ? 
                    <AddressHostPage />
                    :
                    <BlogAddress />
                }
            </>
        </AddressHostPageProvider>
    );
}

export default AddressPage;