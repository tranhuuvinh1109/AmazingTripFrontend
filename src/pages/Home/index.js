import { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import removeCookie from '../../hooks/removeCookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getCookie from '../../hooks/getCookie'
import getImage from '../../hooks/getImage';
import { UserAuth } from '../../context/AuthFireBaseContext';
import SlideShow from '../../components/Layouts/components/SlideShow';


function Home() {
    const [userData, setUserData] = useState({});
    const { googleSignIn, user } = UserAuth();
    const [image, setImage] = useState();
    const navigate = useNavigate();

    const handlerLogout = () => {
        removeCookie('userin');
        toast.info("Đăng xuất thành công !!!", {
            toastId: 1,
        });
        navigate('/landing');
    }

    useEffect(() => {
        const getUrl = async () => {
            const imageUrl = await getImage(JSON.parse(getCookie('userin')).avatar);

            setImage(imageUrl)
        }

        getUrl()
    }, [])

    // const handleSigin = async () => {
    //     try {
    //         const res = await googleSignIn();

    //       } catch (error) {
    //         console.log(error);
    //       }
    // }


    return (
        <Fragment>

            <div style={{ height: '1000px' }}>
                <h1>
                    Home Page
                    <br/>
                    <Link to="/listAddresses">Danh sách địa điểm</Link>
                    <br/>
                    <Link to="/host">Trang của host</Link>
                    <br/>
                    <Link to="/user">Trang của người dùng</Link>
                    <br/>
                    <Link to="/group">Trang nhóm</Link>
                    <br/>
                    <button
                        onClick={() => handlerLogout()}
                    >
                        Đăng xuất
                    </button>
                    <br/>
                    <img src={image} style={{ width: '100px', height: '50px' }} />
                </h1>
            </div>
            {/* <button
                onClick={handleSigin}
            >
                Đăng nhập google
            </button> */}
            <div style={{ height: '400px' }}>
                <SlideShow />
            </div>
        </Fragment>
    )
}

export default Home;