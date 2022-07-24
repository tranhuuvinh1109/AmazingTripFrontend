import axiosClient from "./axiosClient";

const commentAddressApi = {
    get: (id) => {
        const url = `/commentsBlog/${id}`;
        return axiosClient.get(url);
    },
    post: (id, data) => {
        const url =`/createCommentBlog/${id}`;
        return axiosClient.post(url, data);
    },
    patch: (data) => {
        const url = `/editCommentBlog`;
        return axiosClient.patch(url, data);
    },
    delete: (id) => {
        const url = `/deleteCommentBlog/${id}`;
        return axiosClient.delete(url);
    }
}
export default commentAddressApi;