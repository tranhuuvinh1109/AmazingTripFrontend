import { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import authApi from '../../../api/authApi';

const RegisterContext = createContext()

function RegisterProvider({ children }) {
    const navigate = useNavigate();

    // Hiển thị lỗi từ DB
    const [errMsg, setErrMsg] = useState('');
    // Chuyển sang bước tiếp theo
    const [page, setPage] = useState(0);

    
    const showErr = (err) => {
        setErrMsg(err);
    }
    
    const handleSetPage = (next) => {
        if(next)
            setPage((currPage) => currPage + 1)
        else 
            setPage((currPage) => currPage - 1)
    }

    // Lấy dữ liệu của form
    const [formData, setFormData] = useState({
        username: "",
        birthday: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        address: "",
        nickname: "",
        role: "2",
    })

    // Form Submit
	const handleSubmit = () => {
		const { confirmPassword, ...postData } = formData;
		try {
			authApi.postRegister(postData);
			navigate('/login');
		} catch (error) {
			console.log('Toang meo chay roi loi cc: ', error);
		}
	}


    const value = {
        formData,
        setFormData,
        errMsg,
        showErr,
        page,
        handleSetPage,
        handleSubmit
    }

    return (
        <RegisterContext.Provider value={value}>
            {children}
        </RegisterContext.Provider>
    )
}

export { RegisterContext, RegisterProvider}