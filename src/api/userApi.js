import axiosClient from "./axiosClient";

const userApi = {
    getAll: (params) => {
        const url = '/address';
        return axiosClient.get(url);
    },

    get: (id) => {
        const url = `/user/${id}`;
        return axiosClient.get(url);
    }

}
export default userApi;