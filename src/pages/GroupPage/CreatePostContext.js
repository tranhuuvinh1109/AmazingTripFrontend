import { useState, createContext } from 'react'

const CreatePostContext = createContext()

function CreatePostProvider({ children }) {

    const [showForm, setShowForm] = useState(false)

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    const value = {
        showForm,
        toggleForm
    }

    return (
        <CreatePostContext.Provider value={value}>
            {children}
        </CreatePostContext.Provider>
    )
}

export { CreatePostContext, CreatePostProvider}