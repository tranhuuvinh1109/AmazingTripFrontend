import { useState, createContext } from 'react'

const RegisterPageContext = createContext()

function RegisterPageProvider({ children }) {

    const [page, setPage] = useState(0);

    const nextPage = () => {
        setPage((currPage) => currPage + 1);
    }

    const prevPage = () => {
        setPage((currPage) => currPage - 1);
    }

    const value = {
        page,
        nextPage,
        prevPage
    }

    return (
        <RegisterPageContext.Provider value={value}>
            {children}
        </RegisterPageContext.Provider>
    )
}

export { RegisterPageContext, RegisterPageProvider}