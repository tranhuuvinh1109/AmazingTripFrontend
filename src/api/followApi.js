import axiosClient from "./axiosClient";

const followApi = {
    post: (data) => {
        const url =`/follow`;
        return axiosClient.post(url, data);
    },
}
export default followApi;