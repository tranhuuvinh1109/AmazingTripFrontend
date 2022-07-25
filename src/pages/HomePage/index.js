import getCookie from "../../hooks/getCookie";
import UserHomePage from "./UserHomePage";
import HostHomePage from "./HostHomePage";

function HomePage() {
    const userData = JSON.parse(getCookie('userin'));

    return ( 
        <>
            {userData.role == '1' ? 
                <HostHomePage  />
                :
                <UserHomePage />
            }
        </>
    );
}

export default HomePage;