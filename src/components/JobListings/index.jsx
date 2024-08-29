import Header from "../Header/index.jsx";
import Table from "../Table/index.jsx";
import {useEffect, useState} from "react";

const JobListings = () => {
    const [headerText, setHeaderText] = useState('Most recent jobs')
    const [jobInfo, setJobInfo] = useState([])
    const [skillQuery, setSkillQuery] = useState('http://0.0.0.0:8080/jobs/recent')


    useEffect(() => {
        const getJobInfo = async () => {
            const response = await fetch(skillQuery)
            const data = await response.json()
            setJobInfo(data)
        }
        getJobInfo()
    }, [skillQuery]);



    return (
        <main className='mx-auto container justify-content-center col-12 col-md-7 p-0'>
                <Header headerText={headerText} />
                <Table jobInfo={jobInfo} setSkillQuery={setSkillQuery} skillQuery={skillQuery}/>
        </main>
    )
}
export default JobListings