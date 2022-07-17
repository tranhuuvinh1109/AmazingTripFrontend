import axiosClient from "./axiosClient";

const discountApi = {
    post: (data) => {
        const url =`/discount`;
        return axiosClient.post(url, data);
    },
    postSaleRegister: (data) => {
        const url = `/createForm`;
        return axiosClient.post(url, data);
    }
}
export default discountApi;