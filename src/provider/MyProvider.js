import React, { useState } from 'react';
import MyContext from '../context/MyContext';

const MyProvider = ({ children }) => {
    const [data, setData] = useState(true);

    const updateData = (newData) => {
        setData(newData);
    }

    return (
        <MyContext.Provider value={{ data, updateData }} >
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider