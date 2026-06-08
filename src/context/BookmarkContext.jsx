import { createContext, useEffect, useState } from "react";

const BookmarkContext = createContext();

function BookmarkProvider({children}){
    const [bookmarks, setBookmarks] = useState(() => {
        try{

            const saved = localStorage.getItem("bookmarks");
            return saved ? JSON.parse(saved) : [] ;
        } catch(error){
            return [];
        }
    })

    useEffect(() => {
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    },[bookmarks])
    return (
        <BookmarkContext.Provider value={{bookmarks, setBookmarks}}>
          {children}
        </BookmarkContext.Provider>
    )
}

export { BookmarkContext, BookmarkProvider};