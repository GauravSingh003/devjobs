import JobCard from '../Components/JobCard';
import useFetchJobs from '../hooks/useFetchJobs';
import '../Components/JobCard.css'


const JobsPage = () => {
    const {data, loading, errors} = useFetchJobs();

    if(loading) return <h2>Loading jobs...</h2>
    if(errors) return <h2>Something went wrong!</h2>

    return (
        <>
            <div className="jobs-container">
                <h1>Available Jobs</h1>
                {data.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </>
        )
}

export default JobsPage