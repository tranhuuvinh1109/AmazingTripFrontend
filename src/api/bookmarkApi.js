import axiosClient from "./axiosClient";

const bookmarkApi = {
    post: (data) => {
        const url = `/bookmark`;
        return axiosClient.post(url, data);
    },
    checkStatus: (address_id, user_id) => {
        const url = `/bookmark/${address_id}/${user_id}`;
        return axiosClient.get(url);
    },
    get: (user_id) => {
        const url = `/bookmark/${user_id}`;
        return axiosClient.get(url);
    },
    getUser: (id) => {
        const url = `/userBookmark/${id}`;
        return axiosClient.get(url);
    }
}
export default bookmarkApi;