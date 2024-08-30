import Header from "../Header/index.jsx";
import Table from "../Table/index.jsx";
import {useEffect, useState} from "react";

const JobListings = ({setQuery, query, setHeader, header, viewButton, setViewButton}) => {

    const [jobSearchResults, setJobSearchResults] = useState([])
    useEffect(() => {
        const JobInfo = async () => {
            const response = await fetch(query)
            const data = await response.json()
            setJobSearchResults(data)
        }
        JobInfo()
    }, [query]);
    return (
        <main className='container col-12 col-md-7'>
                <Header setQuery={setQuery} header={header} setHeader={setHeader} viewButton={viewButton} setViewButton={setViewButton}/>
                <Table jobInfo={jobSearchResults} />
        </main>
    )
}
export default JobListings