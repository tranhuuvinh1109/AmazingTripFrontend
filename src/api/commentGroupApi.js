import axiosClient from "./axiosClient";

const commentGroupApi = {
    get: (id) => {
        const url = `/comments/${id}`;
        return axiosClient.get(url);
    },
    post: (data) => {
        const url =`/createComment`;
        return axiosClient.post(url, data);
    },
    patch: (data) => {
        const url = `/editComment`;
        return axiosClient.patch(url, data);
    },
    delete: (id) => {
        const url = `/deleteComment/${id}`;
        return axiosClient.delete(url);
    }
}
export default commentGroupApi;