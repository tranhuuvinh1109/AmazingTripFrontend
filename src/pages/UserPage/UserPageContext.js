import { useState, createContext } from 'react';

const UserPageContext = createContext()

function UserPageProvider({ children }) {

    const [userAva, setUserAva] = useState();
    const [userData, setUserData] = useState([]);
    const [postData, setPostData] = useState([]);
    const [followCheck, setFollowCheck] = useState(false);
    const [old, setOld] = useState(true);
    const [commentsBlog, setCommentsBlog] = useState([]);

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
        old,
        setOld,
        userData,
        setUserData,
        userAva,
        setUserAva,
        postData,
        setPostData,
        followCheck,
        setFollowCheck,
        commentsBlog,
        setCommentsBlog,
        handleResetCommentCount,
        handleResetReactionCount,
        handleResetPostData
    }

    return (
        <UserPageContext.Provider value={value}>
            {children}
        </UserPageContext.Provider>
    )
}

export { UserPageContext, UserPageProvider }