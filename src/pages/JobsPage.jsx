import useFetchJobs from '../hooks/useFetchJobs'
const JobsPage = () => {
    const {data, loading, errors} = useFetchJobs();

    if(loading) return <h2>Loading jobs...</h2>
    if(errors) return <h2>Something went wrong!</h2>

    return (
        <>
            <h1>JobsPage</h1>
            {data.map((job) => (
                <div key={job.id}>
                    <h2>{job.title}</h2>
                    <p>{job.company}</p>
                    <p>{job.location}</p>
                    <p>{job.salary}</p>
                </div>
            ))}
        </>
        )
}

export default JobsPage