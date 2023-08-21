import { createContext } from "react";

const defaultContext = {
    data: true,
    updateData: (newData) => { },
}

const MyContext = createContext(defaultContext);

export default MyContext;