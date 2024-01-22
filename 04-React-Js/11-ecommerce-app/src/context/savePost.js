import { createContext, useContext } from "react";

const SavePostContext = createContext({
    savePost: [],
    setSavePost: () => { }
});

const SavePostProvider = SavePostContext.Provider

function useSavePost() {
    return useContext(SavePostContext);
}

export { SavePostContext, SavePostProvider };

export default useSavePost