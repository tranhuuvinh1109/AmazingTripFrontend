import { useState, createContext } from 'react'

const GlobalContext = createContext()

function GlobalProvider({ children }) {

    const [bookmarkData, setBookmarkData] = useState([]);
    const [followData, setFollowData] = useState([]);
    const [groupData, setGroupData] = useState([]);

    const [showChatBox, setShowChatBox] = useState(false);

    //reset address Bookmark Data
    const handleResetBookmarkData = (id) => {
        const obj = bookmarkData.filter(obj => obj.address_id != id);
        setBookmarkData([...obj])
    }

    //reset user follow Data
    const handleResetFollowData = (id) => {
        const obj = followData.filter(obj => obj.id != id);
        //console.log(obj);
        setFollowData([...obj])
    }

    //reset group Data
    const handleResetGroupData = (id) => {
        const obj = groupData.filter(obj => obj.group_id != id);
        setGroupData([...obj])
    }

    const value = {
        bookmarkData,
        setBookmarkData,
        followData,
        setFollowData,
        groupData,
        setGroupData,
        showChatBox,
        setShowChatBox,
        handleResetBookmarkData,
        handleResetFollowData,
        handleResetGroupData
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider}