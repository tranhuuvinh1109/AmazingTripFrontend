import axiosClient from "./axiosClient";

const addressApi = {
    get: (id) => {
        const url = `/address/${id}`;
        return axiosClient.get(url);
    }
}
export default addressApi;