import { useState, createContext } from 'react';

const GroupPageContext = createContext()

function GroupPageProvider({ children }) {

    const [showForm, setShowForm] = useState(false);
    const [groupData, setGroupData] = useState([]);
    const [memberData, setMemberData] = useState([]);
    const [postData, setPostData] = useState([]);
    const [commentsBlog, setCommentsBlog] = useState([]);

    const [memberCheck, setMemberCheck] = useState(false);

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

    // Resetcomment Count
    const handleResetCommentCount = (id, type) => {
        const obj = postData.filter(obj => obj.blog_id == id);
        if(type)
            obj[0].commentCount += 1;
        else
            obj[0].commentCount -= 1;
    }

    // Reset Reaction Count
    const handleResetReactionCount = (id, reaction, type, status) => {
        const obj = postData.filter(obj => obj.blog_id == id);
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


    const toggleForm = () => {
        setShowForm(!showForm)
    }

    const value = {
        showForm,
        toggleForm,
        groupData,
        setGroupData,
        memberData,
        setMemberData,
        memberCheck,
        setMemberCheck,
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
        <GroupPageContext.Provider value={value}>
            {children}
        </GroupPageContext.Provider>
    )
}

export { GroupPageContext, GroupPageProvider }