import axiosClient from "./axiosClient";

const groupApi = {
    get: (id) => {
        const url = `/group/${id}`;
        return axiosClient.get(url);
    },
    post: (data) => {
        const url =`/group`;
        return axiosClient.post(url, data);
    }
}
export default groupApi;