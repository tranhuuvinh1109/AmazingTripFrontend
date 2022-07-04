import axiosClient from "./axiosClient";

const blogAddressPostApi = {
    getAll: () => {
        const url = `/blogAddress`;
        return axiosClient.get(url);
    },
}
export default blogAddressPostApi;