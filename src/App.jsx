import './App.css'
import JobSearch from "./components/JobSearch/index.jsx";
import {useState} from "react";
import JobListings from "./components/JobListings/index.jsx";

function App() {
    const [query, setQuery] = useState('http://0.0.0.0:8080/jobs/recent')

    const [header, setHeader] = useState('Most recent jobs')
    const [viewButton, setViewButton] = useState('View all jobs ->')

    return (
        <>
            <JobSearch setQuery={setQuery} setHeader={setHeader} setViewButton={setViewButton}/>
            <JobListings setQuery={setQuery} query={query} header={header} setHeader={setHeader} viewButton={viewButton}
            setViewButton={setViewButton}/>
        </>
    )
}

export default App
