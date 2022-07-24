import axiosClient from "./axiosClient";

const addressApi = {
    getAll: () => {
        const url = `/addresses`;
        return axiosClient.get(url);
    },
    get: (address_id, user_id) => {
        const url = `/address/${address_id}/${user_id}`;
        return axiosClient.get(url);
    },
    post: (data) => {
        const url = `/address`;
        return axiosClient.post(url, data);
    },
    getAllHostAddress: (user_id) => {
        const url = `/addressHost/${user_id}`;
        return axiosClient.get(url);
    },
    getHost: (address_id, user_id) => {
        const url = `/address_by_host/${address_id}/${user_id}`;
        return axiosClient.get(url);
    },
    getBookmarked: (user_id) => {
        const url = `/bookmark/${user_id}`;
        return axiosClient.get(url);
    }
}
export default addressApi;