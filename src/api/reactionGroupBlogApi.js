import axiosClient from "./axiosClient";

const reactionGroupBlogApi = {
    post: (data) => {
        const url =`/reactBlog`;
        return axiosClient.post(url, data);
    },
    checkReaction: (blog_id, id_user) => {
        const url =`/reactCheck/${blog_id}/${id_user}`;
        return axiosClient.get(url);
    },
    unReaction: (blog_id, id_user) => {
        const url =`/unReaction/${blog_id}/${id_user}`;
        return axiosClient.delete(url);
    }
}
export default reactionGroupBlogApi;