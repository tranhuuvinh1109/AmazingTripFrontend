import axiosClient from "./axiosClient";

const addressApi = {
    get: (id) => {
        const url = `/address/${id}`;
        return axiosClient.get(url);
    },
    getHost: (address_id, user_id) => {
        const url = `/address_by_host/${address_id}/${user_id}`;
        return axiosClient.get(url);
    }
}
export default addressApi;