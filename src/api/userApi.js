import axiosClient from "./axiosClient";

const userApi = {
    getAll: (id) => {
        const url = `/profile/${id}`;
        return axiosClient.get(url);
    }
}
export default userApi;