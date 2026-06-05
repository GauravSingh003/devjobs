import { useEffect, useState } from "react";
import jobs from "../services/jobsData";

function useFetchJobs() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)

        async function fetchJobs() {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setData(jobs);
            }
            catch (err) {
                setError(err);
            }
            finally {
                setLoading(false)
            }
        }

        fetchJobs();

    }, [])
    
    return { data, loading, error }
}

export default useFetchJobs;