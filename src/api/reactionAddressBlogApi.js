import axiosClient from "./axiosClient";

const reactionGroupBlogApi = {
    post: (data) => {
        const url =`/reactAddressBlog`;
        return axiosClient.post(url, data);
    },
    checkReaction: (blog_address_id, id_user) => {
        const url =`/reactAddressCheck/${blog_address_id}/${id_user}`;
        return axiosClient.get(url);
    },
    unReaction: (blog_id, id_user) => {
        const url =`/unReactionAddress/${blog_id}/${id_user}`;
        return axiosClient.delete(url);
    }
}
export default reactionGroupBlogApi;