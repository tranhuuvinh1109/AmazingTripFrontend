import axiosClient from "./axiosClient";

const authApi = {
    postRegister: (data) => {
        const url = `/register`;
        return axiosClient.post(url, data);
    },
    postLogin: (data) => {
        const url = `/login`;
        return axiosClient.post(url, data)
    }

}
export default authApi;