import './JobCard.css'

const JobCard = ({job}) => {
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
      <button>View Details</button>
    </div>
  )
}

export default JobCard