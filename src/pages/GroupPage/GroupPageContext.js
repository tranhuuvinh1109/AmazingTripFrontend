import { useState, createContext } from 'react';
import getImage from '../../hooks/getImage';

const GroupPageContext = createContext()

function GroupPageProvider({ children }) {

    const [showForm, setShowForm] = useState(false);
    const [groupData, setGroupData] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [leadAva, setLeadAva] = useState();
    
    const [postData, setPostData] = useState();
    const [commentsBlog, setCommentsBlog] = useState([]);

    // Reset post Data after
    const handleResetPostData = (id) => {
        const obj = postData.filter(obj => obj.blog_id != id);
        setPostData([...obj])
    }

    // Reset comment Data after
    const handleResetCommentData = (id) => {
        const obj = commentsBlog.filter(obj => obj.comment_blog_id != id);
        setCommentsBlog([...obj])
    }


    const toggleForm = () => {
        setShowForm(!showForm)
    }

    const value = {
        showForm,
        toggleForm,
        groupData,
        setGroupData,
        imageUrl,
        setImageUrl,
        leadAva,
        setLeadAva,
        postData,
        setPostData,
        handleResetPostData,
        commentsBlog,
        setCommentsBlog,
        handleResetCommentData
    }

    return (
        <GroupPageContext.Provider value={value}>
            {children}
        </GroupPageContext.Provider>
    )
}

export { GroupPageContext, GroupPageProvider }