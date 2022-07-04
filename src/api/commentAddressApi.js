import axiosClient from "./axiosClient";

const commentAddressApi = {
    delete: (id) => {
        const url = `/deleteCommentBlog/${id}`;
        return axiosClient.delete(url);
    },
}
export default commentAddressApi;