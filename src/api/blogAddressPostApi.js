import axiosClient from "./axiosClient";

const blogAddressPostApi = {
    get: (id) => {
        const url = `/blogAddress/${id}`;
        return axiosClient.get(url);
    },
    post: (data) => {
        const url = `/blogAddress`;
        return axiosClient.post(url, data);
    },
    delete: (id) => {
        const url = `/blogAddress/${id}`;
        return axiosClient.delete(url);
    },
}
export default blogAddressPostApi;