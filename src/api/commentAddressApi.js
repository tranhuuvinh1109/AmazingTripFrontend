import axiosClient from "./axiosClient";

const commentAddressApi = {
    delete: (id) => {
        const url = `/deleteCommentBlog/${id}`;
        return axiosClient.delete(url);
    },
    patch: (data) => {
        const url = `/editCommentBlog`;
        return axiosClient.patch(url, data);
    }
}
export default commentAddressApi;