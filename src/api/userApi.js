import axiosClient from "./axiosClient";

const userApi = {
    getAll: (user_id, current_user_id) => {
        const url = `/profile/${user_id}/${current_user_id}`;
        return axiosClient.get(url);
    }
}
export default userApi;