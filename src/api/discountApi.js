import axiosClient from "./axiosClient";

const discountApi = {
    post: (data) => {
        const url =`/discount`;
        return axiosClient.post(url, data);
    },
    postSaleRegister: (data) => {
        const url = `/createForm`;
        return axiosClient.post(url, data);
    },
    cancelSaleRegister: (discount_id, id_user) => {
        const url = `/deleteForm/${discount_id}/${id_user}`;
        return axiosClient.delete(url);
    }
}
export default discountApi;