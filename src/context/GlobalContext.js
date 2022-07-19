import { useState, createContext } from 'react'

const GlobalContext = createContext()

function GlobalProvider({ children }) {

    const [bookmarkData, setBookmarkData] = useState([]);
    const [followData, setFollowData] = useState([]);

    //reset address Bookmark Data
    const handleResetBookmarkData = (id) => {
        const obj = bookmarkData.filter(obj => obj.address_id != id);
        setBookmarkData([...obj])
    }

    //reset user follow Data
    const handleResetFollowData = (id) => {
        const obj = followData.filter(obj => obj.id != id);
        console.log(obj);
        setFollowData([...obj])
    }

    const value = {
        bookmarkData,
        setBookmarkData,
        followData,
        setFollowData,
        handleResetBookmarkData,
        handleResetFollowData
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider}