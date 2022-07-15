import { useState, createContext } from 'react'

const BlogAddressContext = createContext()

function BlogAddressProvider({ children }) {

    const [addressData, setAddressData] = useState([]);
    const [postData, setPostData] = useState([]);
    const [groupList, setGroupList] = useState([]);

    const [showForm, setShowForm] = useState(false)
    const [reShowPost, setReShowPost] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    // Reset post Data after
    const handleResetPostData = (id) => {
        const obj = postData.filter(obj => obj.blog_address_id != id);
        setPostData([...obj])
    }

    // Resetcomment Count
    const handleResetCommentCount = (id, type) => {
        const obj = postData.filter(obj => obj.blog_address_id == id);
        if(type)
            obj[0].commentCount += 1;
        else
            obj[0].commentCount -= 1;
    }

    // Reset Reaction Count
    const handleResetReactionCount = (id, reaction, type, status) => {
        const obj = postData.filter(obj => obj.blog_address_id == id);
        if(type)
        {
            if(reaction)
            {
                obj[0].likeCount += 1;
                if(status)
                    obj[0].dislikeCount -= 1;
            }
            else
            {
                obj[0].dislikeCount += 1;
                if(status)
                    obj[0].likeCount -= 1;
            }
        }
        else
        {
            if(reaction)
                obj[0].likeCount -= 1;
            else
                obj[0].dislikeCount -= 1;
        }
    }

    const value = {
        addressData,
        setAddressData,
        groupList,
        setGroupList,
        postData,
        setPostData,
        showForm,
        toggleForm,
        reShowPost,
        setReShowPost,
        handleResetPostData,
        handleResetCommentCount,
        handleResetReactionCount,
    }

    return (
        <BlogAddressContext.Provider value={value}>
            {children}
        </BlogAddressContext.Provider>
    )
}

export { BlogAddressContext, BlogAddressProvider}