import { useState, createContext } from 'react'

const ToastNotiContext = createContext()

function ToastNotiProvider({ children }) {

    const [mess, setMess] = useState('')

    const value = {
        mess,
        setMess,
    }

    return (
        <ToastNotiContext.Provider value={value}>
            {children}
        </ToastNotiContext.Provider>
    )
}

export { ToastNotiContext, ToastNotiProvider}