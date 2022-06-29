import axiosClient from "./axiosClient";

const authApi = {
    post: (data) => {
        const url = `/register`;
        return axiosClient.post(url, data);
    }

}
export default authApi;