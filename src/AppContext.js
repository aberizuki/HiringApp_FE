import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const updateData = (newData) => {
        setData(newData);
    };

    return (
        <AppContext.Provider value={{ data, updateData }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;