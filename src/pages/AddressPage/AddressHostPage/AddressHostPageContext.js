import { useState, createContext } from 'react';

const AddressHostPageContext = createContext()

function AddressHostPageProvider({ children }) {

    const [addressData, setAddressData] = useState({});
    const [discountData, setDiscountData] = useState({});

    const value = {
        addressData,
        setAddressData,
        discountData,
        setDiscountData
    }

    return (
        <AddressHostPageContext.Provider value={value}>
            {children}
        </AddressHostPageContext.Provider>
    )
}

export { AddressHostPageContext, AddressHostPageProvider}