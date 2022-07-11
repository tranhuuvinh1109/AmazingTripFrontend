import { useState, createContext } from 'react';

const UserPageContext = createContext()

function UserPageProvider({ children }) {

    const [userAva, setUserAva] = useState();
    const [userData, setUserData] = useState();
    const [postData, setPostData] = useState();

    const [commentsBlog, setCommentsBlog] = useState([]);

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


    const value = {
        userData,
        setUserData,
        userAva,
        setUserAva,
        postData,
        setPostData,
        commentsBlog,
        setCommentsBlog,
        handleResetCommentData,
        handleResetCommentCount,
        handleResetReactionCount
    }

    return (
        <UserPageContext.Provider value={value}>
            {children}
        </UserPageContext.Provider>
    )
}

export { UserPageContext, UserPageProvider }