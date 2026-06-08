import { useParams } from 'react-router-dom';
import jobs from '../services/jobsData';

const JobDetailPage = () => {
  const {id} = useParams();
  const job = jobs.find((j) => j.id === Number(id))
  if(!job) return <h2> job not found!</h2>

  return (
    <div className='job-container'>
      <h1>{job.title}</h1>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
      <p>{job.type}</p>

      <div>
        <h3>Skills Required</h3>
        {job.skills.map((skills, idx)=> ( 
          <span key={idx} className='skill-tag'>{skills}</span>
        ))}
      </div>
    </div>
    
  )
}

export default JobDetailPage