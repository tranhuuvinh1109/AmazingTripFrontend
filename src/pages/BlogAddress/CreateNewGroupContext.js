import { useState, createContext } from 'react'

const FormCreateNewGroupContext = createContext()

function CreateNewGroupProvider({ children }) {

    const [showCreate, setShowCreate] = useState(false)

    const toggleCreate = () => {
        setShowCreate(!showCreate)
    }

    const value = {
        showCreate,
        toggleCreate
    }

    return (
        <FormCreateNewGroupContext.Provider value={value}>
            {children}
        </FormCreateNewGroupContext.Provider>
    )
}

export { FormCreateNewGroupContext, CreateNewGroupProvider }