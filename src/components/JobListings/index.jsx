import Header from "../Header/index.jsx";
import Table from "../Table/index.jsx";
import {useEffect, useState} from "react";

const JobListings = ({urlSuffix, setUrlSuffix}) => {
    const [skillQuery, setSkillQuery] = useState('')
    console.log(skillQuery)

    const [urlBuilder, setUrlBuilder] = useState('jobs/recent')

    const [headerText, setHeaderText] = useState('Most recent jobs')
    const [jobInfo, setJobInfo] = useState([])

    useEffect(() => {
        if (urlSuffix && skillQuery){
            setUrlBuilder('jobs?'+urlSuffix+'&'+skillQuery)
        }    else if (urlSuffix && !skillQuery) {
            setSkillQuery('')
            setUrlBuilder('jobs?'+urlSuffix)
        } else if (skillQuery && !urlSuffix) {
            setUrlBuilder('jobs?'+skillQuery)
        }
    }, [urlSuffix, skillQuery]);

    console.log(urlBuilder)
    useEffect(() => {
        if(urlSuffix.includes('Full time')) {
            setHeaderText('Full time jobs')
        } else if (urlSuffix.includes('Part time')) {
            setHeaderText('Part time jobs')
        } else if (urlSuffix.includes('Contract')) {
            setHeaderText('Contract jobs')
        } else if (!urlSuffix.includes('?')) {
            setHeaderText('All Jobs!')
        }
    }, [urlSuffix]);



    useEffect(() => {
        const getJobInfo = async () => {
            const response = await fetch(`http://0.0.0.0:8080/${urlBuilder}`)
            const data = await response.json()
            setJobInfo(data)
        }
        getJobInfo()
    }, [urlBuilder]);


    return (
        <main className='mx-auto container justify-content-center col-12 col-md-7 p-0'>
                <Header headerText={headerText} />
                <Table jobInfo={jobInfo} skillQuery={skillQuery} setUrlSuffix={setUrlSuffix} setSkillQuery={setSkillQuery} />
        </main>
    )
}
export default JobListings