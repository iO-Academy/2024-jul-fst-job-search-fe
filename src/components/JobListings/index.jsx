import Header from "../Header/index.jsx";
import Table from "../Table/index.jsx";
import {useEffect, useState} from "react";

const JobListings = ({headerText, jobInfo, setJobInfo, url}) => {
    // const [headerText, setHeaderText] = useState('Most recent jobs')
    // const [jobInfo, setJobInfo] = useState([])
    useEffect(() => {
        const getJobInfo = async (url) => {
            const response = await fetch(url)
            const data = await response.json()
            setJobInfo(data)
        }
        getJobInfo(url)
    }, [url]);
    return (
        <main className='mx-auto container justify-content-center col-12 col-md-7 p-0'>
                <Header headerText={headerText} />
                <Table jobInfo={jobInfo} />
        </main>
    )
}
export default JobListings