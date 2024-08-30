import JobListings from "./components/JobListings/index.jsx";
import Nav from "./components/Navbar/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Skills from "./components/Skills/index.jsx";
import {useState} from "react";

function App() {

    const [headerText, setHeaderText] = useState('Most recent jobs')
    const [jobInfo, setJobInfo] = useState([])
    const [url, setUrl] = useState('http://0.0.0.0:8080/jobs/recent')

    return (
        <>
            <Nav/>
            <JobListings headerText={headerText} jobInfo={jobInfo} setJobInfo={setJobInfo} url={url}/>
            <Skills setHeaderText={setHeaderText} setUrl={setUrl}/>
            <Footer/>
        </>
    )
}

export default App
