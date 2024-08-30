import Header from "../Header/index.jsx";
import Table from "../Table/index.jsx";
import {useEffect, useState} from "react";

const JobListings = ({
                         navBarUrlSuffix,
                         setNavBarUrlSuffix,
                         skillQuery,
                         setSkillQuery,
                         typeQuery,
                         setTypeQuery,
                         setQuery,
                         query,
                         setHeader,
                         header,
                         viewButton,
                         setViewButton
                     }) => {
    console.log(skillQuery)
    console.log(typeQuery)
    console.log(query)

    const [urlBuilder, setUrlBuilder] = useState('jobs/recent')

    const [headerText, setHeaderText] = useState('Most recent jobs')
    const [jobInfo, setJobInfo] = useState([])

    const [jobSearchResults, setJobSearchResults] = useState([])

    useEffect(() => {
        if (query) {
            setUrlBuilder(query)
        }
        // if (navBarUrlSuffix) {
        if (navBarUrlSuffix && skillQuery) {
            setUrlBuilder(navBarUrlSuffix + '&' + skillQuery)
        } else if (navBarUrlSuffix && !skillQuery) {
            setSkillQuery('')
            setUrlBuilder(navBarUrlSuffix)
        } else if (skillQuery && !navBarUrlSuffix) {
            setUrlBuilder('jobs?' + skillQuery)
        }
        // }
        // else if (typeQuery) {
        //     setNavBarUrlSuffix('')
        //     if (typeQuery && skillQuery) {
        //         setUrlBuilder('jobs?'+typeQuery + '&' + skillQuery)
        //     } else if (typeQuery && !skillQuery) {
        //         setSkillQuery('')
        //         setUrlBuilder('jobs?'+navBarUrlSuffix)
        //     } else if (skillQuery && !typeQuery) {
        //         setUrlBuilder('jobs?' + skillQuery)
        //     }
        // }

    }, [navBarUrlSuffix, skillQuery, typeQuery, query]);

    console.log('http://0.0.0.0:8080/' + urlBuilder)

    useEffect(() => {
        if (navBarUrlSuffix.includes('Full time')) {
            setHeaderText('Full time jobs')
        } else if (navBarUrlSuffix.includes('Part time')) {
            setHeaderText('Part time jobs')
        } else if (navBarUrlSuffix.includes('Contract')) {
            setHeaderText('Contract jobs')
        } else if (!navBarUrlSuffix.includes('?')) {
            setHeaderText('All Jobs!')
        }
    }, [navBarUrlSuffix]);


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
            <Header headerText={headerText} setQuery={setQuery} header={header} setHeader={setHeader}
                    viewButton={viewButton} setViewButton={setViewButton}/>
            <Table jobInfo={jobInfo} skillQuery={skillQuery} setUrlSuffix={setNavBarUrlSuffix}
                   setSkillQuery={setSkillQuery} typeQuery={typeQuery} setTypeQuery={setTypeQuery}/>
        </main>
    )
}


export default JobListings