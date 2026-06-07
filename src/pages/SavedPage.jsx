import React, { useContext } from 'react'
import { BookmarkContext } from '../context/BookmarkContext'
import JobCard from '../Components/JobCard';

const SavedPage = () => {
  const { bookmarks } = useContext(BookmarkContext);
  return (
    <>
    <div className="job-container">
        <h1>Saved jobs</h1>
        {bookmarks.length === 0? (
          <p>No Saveed Job yet!</p> 
        ) : (
          bookmarks.map((job) => (
            <JobCard key={job.id} job= {job} />
          ))
        )}
    </div>
    </>
  )
}

export default SavedPage