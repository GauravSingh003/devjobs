import { createContext, useState } from "react";

const BookmarkContext = createContext();

function BookmarkProvider({children}){
    const [bookmarks, setBookmarks] = useState([])

    return (
        <BookmarkContext.Provider value={{bookmarks, setBookmarks}}>
          {children}
        </BookmarkContext.Provider>
    )
}

export { BookmarkContext, BookmarkProvider};