import axiosClient from "./axiosClient";

const blogAddressPostApi = {
    get: (id) => {
        const url = `/blogAddress/${id}`;
        return axiosClient.get(url);
    },
    delete: (id) => {
        const url = `/blogAddress/${id}`;
        return axiosClient.delete(url);
    },
}
export default blogAddressPostApi;