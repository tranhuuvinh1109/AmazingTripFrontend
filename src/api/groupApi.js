import axiosClient from "./axiosClient";

const groupApi = {
    getAll: (id) => {
        const url = `/groupAddress/${id}`;
        return axiosClient.get(url);
    },
    get: (id) => {
        const url = `/group/${id}`;
        return axiosClient.get(url);
    },
    post: (data) => {
        const url =`/group`;
        return axiosClient.post(url, data);
    },
    joinGroup: (data) => {
        const url =`/joinGroup`;
        return axiosClient.post(url, data);
    },
    outGroup: (group_id, id_user) => {
        const url =`/outGroup/${group_id}/${id_user}`;
        return axiosClient.delete(url);
    }
}
export default groupApi;