import { useState } from 'react';
import JobCard from '../Components/JobCard';
import useFetchJobs from '../hooks/useFetchJobs';
// import '../Components/JobCard.css'
import './JobPage.css'

const JobsPage = () => {
    const { data, loading, errors } = useFetchJobs();
    const [search, setSearch] = useState("");
    const [locationFilter, setLocationFilter] = useState("ALL");
    const [typeFilter, setTypeFilter] = useState("ALL");

    if (loading) return <h2>Loading jobs...</h2>
    if (errors) return <h2>Something went wrong!</h2>

    const filteredJObs = data.filter((job) => {
        const matchesJobs = job.title.toLowerCase().includes(search.toLowerCase())
        const matchesLocation = locationFilter === "ALL" ? true : job.location === locationFilter;
        const matchTypeFilter = typeFilter === "ALL" ? true : job.type === typeFilter;
        return matchesJobs && matchesLocation && matchTypeFilter;
    })
    console.log("type: ", typeFilter);
    console.log("filtered: ", locationFilter);

    return (
        <>
            <div className="jobs-container">
                <h1>Available Jobs</h1>
                <div className='filter'>
                    <input
                        type="text"
                        placeholder='search jobs...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <select
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                    >
                        <option value="ALL">ALL</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Remote">Remote</option>
                        <option value="Pune">Pune</option>
                    </select>

                    <select
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                    >
                        <option value="ALL">ALL</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Contract">Contract</option>
                    </select>
                </div>
                {filteredJObs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </>
    )
}

export default JobsPage