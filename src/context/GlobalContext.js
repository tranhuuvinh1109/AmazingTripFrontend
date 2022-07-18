import { useState, createContext } from 'react'

const GlobalContext = createContext()

function GlobalProvider({ children }) {

    const [bookmarkData, setBookmarkData] = useState([]);

    //reset address Bookmark Data
    const handleResetBookmarkData = (id) => {
        const obj = bookmarkData.filter(obj => obj.address_id != id);
        setBookmarkData([...obj])
    }

    const value = {
        bookmarkData,
        setBookmarkData,
        handleResetBookmarkData
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider}