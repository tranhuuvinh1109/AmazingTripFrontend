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
        handleResetCommentData
    }

    return (
        <BlogAddressContext.Provider value={value}>
            {children}
        </BlogAddressContext.Provider>
    )
}

export { BlogAddressContext, BlogAddressProvider}