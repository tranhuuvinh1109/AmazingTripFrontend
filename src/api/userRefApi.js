import axiosClient from "./axiosClient";

const userRefApi = {
    get: (user_id) => {
        const url = `/user/${user_id}`;
        return axiosClient.get(url);
    },
}
export default userRefApi;