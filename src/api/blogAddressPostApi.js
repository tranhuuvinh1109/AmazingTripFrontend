import axiosClient from "./axiosClient";

const blogAddressPostApi = {
    get: (id) => {
        const url = `/blogAddress/${id}`;
        return axiosClient.get(url);
    },
}
export default blogAddressPostApi;