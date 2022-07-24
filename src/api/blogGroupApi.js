import axiosClient from "./axiosClient";

const blogGroupApi = {
    get: (id) => {
        const url = `/blog/${id}`;
        return axiosClient.get(url);
    },
    post: (data) => {
        const url = `/blog`;
        return axiosClient.post(url, data);
    },
    delete: (id) => {
        const url = `/blog/${id}`;
        return axiosClient.delete(url);
    }
}
export default blogGroupApi;