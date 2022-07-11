import { useState, createContext } from 'react'

const BlogAddressContext = createContext()

function BlogAddressProvider({ children }) {

    const [addressData, setAddressData] = useState([]);

    const [showForm, setShowForm] = useState(false)
    const [reShowPost, setReShowPost] = useState(false);
    const [postData, setPostData] = useState([]);
    const [commentsBlog, setCommentsBlog] = useState([]);

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    // Reset post Data after
    const handleResetPostData = (id) => {
        const obj = postData.filter(obj => obj.blog_address_id != id);
        setPostData([...obj])
    }

    // Reset comment Data after
    const handleResetCommentData = (id) => {
        const obj = commentsBlog.filter(obj => obj.comment_blog_id != id);
        setCommentsBlog([...obj])
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
        showForm,
        toggleForm,
        reShowPost,
        setReShowPost,
        postData,
        setPostData,
        handleResetPostData,
        commentsBlog,
        setCommentsBlog,
        handleResetCommentData,
        handleResetCommentCount,
        handleResetReactionCount
    }

    return (
        <BlogAddressContext.Provider value={value}>
            {children}
        </BlogAddressContext.Provider>
    )
}

export { BlogAddressContext, BlogAddressProvider}