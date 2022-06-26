import { useState, createContext } from 'react'

const FormDiscountContext = createContext()

function FormDiscountProvider({ children }) {

    const [showForm, setShowForm] = useState(false)

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    const value = {
        showForm,
        toggleForm
    }

    return (
        <FormDiscountContext.Provider value={value}>
            {children}
        </FormDiscountContext.Provider>
    )
}

export { FormDiscountContext, FormDiscountProvider}