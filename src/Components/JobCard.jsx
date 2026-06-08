import { useContext } from 'react'
import './JobCard.css'
import { BookmarkContext } from '../context/BookmarkContext'
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  const {bookmarks, setBookmarks} = useContext(BookmarkContext);
  const isBookmarks = bookmarks.some((b) => b.id === job.id);

  const handleBookmark = () => {
    if(isBookmarks){
      setBookmarks(bookmarks.filter((b) => b.id !== job.id));
    } else{
      setBookmarks([...bookmarks, job])
    }
  }

  return (
    <div className='job-card'>
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
      <p>{job.type}</p>

      <div className="skills">
        {job.skills.map((skill, idx) => (
          <span key={idx} className='skill-tag'>{skill}</span>
        ))}
      </div>
      <div className='btn'>
      <button onClick={handleBookmark}>
        {isBookmarks ? "Saved" : "Save Job"}
      </button>

      <Link to={`/jobs/${job.id}`}>
         <button>View Details</button>
      </Link>
      </div>
    </div>
  )
}

export default JobCard