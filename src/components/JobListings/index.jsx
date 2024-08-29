import Header from "../Header/index.jsx";
import Table from "../Table/index.jsx";
import {useEffect, useState} from "react";

const JobListings = ({urlSuffix}) => {
    const [skillQuery, setSkillQuery] = useState(if(urlSuffix){''})
    console.log(skillQuery)
    const [headerText, setHeaderText] = useState('Most recent jobs')
    const [jobInfo, setJobInfo] = useState([])
    useEffect(() => {
        const getJobInfo = async () => {
            const response = await fetch(`http://0.0.0.0:8080/${urlSuffix+skillQuery}`)
            const data = await response.json()
            setJobInfo(data)
        }
        getJobInfo()
    }, [urlSuffix, skillQuery]);
    return (
        <main className='mx-auto container justify-content-center col-12 col-md-7 p-0'>
                <Header headerText={headerText} />
                <Table jobInfo={jobInfo} skillQuery={skillQuery} setSkillQuery={setSkillQuery} />
        </main>
    )
}
export default JobListings