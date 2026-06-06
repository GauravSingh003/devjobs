import { useState } from 'react';
import JobCard from '../Components/JobCard';
import useFetchJobs from '../hooks/useFetchJobs';
import '../Components/JobCard.css'


const JobsPage = () => {
    const { data, loading, errors } = useFetchJobs();
    const [search, setSearch] = useState("");
    const [locationFilter, setLocationFilter] = useState("ALL");

    if (loading) return <h2>Loading jobs...</h2>
    if (errors) return <h2>Something went wrong!</h2>

    const filteredJObs = data.filter((job) => {
        const matchesJobs = job.title.toLowerCase().includes(search.toLowerCase())
        const matchesLocation = locationFilter === "ALL" ? true : job.location === locationFilter;
        return matchesJobs && matchesLocation;
    })
    console.log("data:", data);
    console.log("search: ", search);
    console.log("filtered jobs: ", filteredJObs);

    return (
        <>
            <div className="jobs-container">
                <h1>Available Jobs</h1>
                <div>
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
                        <option value="All">All</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Remote">Remote</option>
                        <option value="Pune">Pune</option>
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