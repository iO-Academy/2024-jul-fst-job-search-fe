import './App.css'
import JobSearch from "./components/JobSearch/index.jsx";
import {useState} from "react";
import JobListings from "./components/JobListings/index.jsx";
import Footer from "./components/Footer/index.jsx";
import {useEffect} from "react";
import Nav from "./components/Navbar/index.jsx";
import Skills from "./components/Skills/index.jsx";

function App() {
    const [navBarSelected, setNavBarSelected] = useState('')
    const [navBarSearchUrl, setNavBarSearchUrl] = useState('')
    const [navBarUrlSuffix, setNavBarUrlSuffix] = useState('')
    const [filterBarSelected, setFilterBarSelected] = useState('')
    const [skillQuery, setSkillQuery] = useState('')
    const [typeQuery, setTypeQuery] = useState('')
    const [checkBoxUrl, setCheckBoxUrl] = useState('')
    const [query, setQuery] = useState('http://0.0.0.0:8080/jobs/recent')
    const [header, setHeader] = useState('Most recent jobs')
    const [viewButton, setViewButton] = useState('View all jobs ->')


    useEffect(() => {
            if (navBarSelected === 'Full time') {
                setNavBarSearchUrl('')
                setSkillQuery('')
                setNavBarSearchUrl('jobs?type[]=Full time')
            } else if (navBarSelected === 'Part time') {
                setNavBarSearchUrl('')
                setSkillQuery('')
                setNavBarSearchUrl('jobs?type[]=Part time')
            } else if (navBarSelected === 'Contract') {
                setNavBarSearchUrl('')
                setSkillQuery('')
                setNavBarSearchUrl('jobs?type[]=Contract')
            } else if (navBarSelected === 'All jobs') {
                setNavBarSearchUrl('')
                setTypeQuery('')
                setSkillQuery('')
                setNavBarSearchUrl('jobs')
            }

    }, [navBarSelected, typeQuery, query]);

console.log(filterBarSelected)
    useEffect(() => {
        if (navBarSearchUrl) {
            setNavBarUrlSuffix(navBarSearchUrl)
        }
    }, [navBarSearchUrl]);

    return (
        <>
            <Nav getSelected={navBarSelected} setSelected={setNavBarSelected}/>
            <JobSearch setCheckBoxUrl={setCheckBoxUrl} checkBoxUrl={checkBoxUrl} setQuery={setQuery} setHeader={setHeader} setViewButton={setViewButton} setFilterBarSelected={setFilterBarSelected} filterBarSelected={filterBarSelected}/>
            <JobListings setQuery={setQuery} query={query} header={header} setHeader={setHeader} viewButton={viewButton}
                          setViewButton={setViewButton} navBarUrlSuffix={navBarUrlSuffix} setNavBarUrlSuffix={setNavBarUrlSuffix} skillQuery={skillQuery} setSkillQuery={setSkillQuery} typeQuery={typeQuery} setTypeQuery={setTypeQuery}/>
            <Skills setHeader={setHeader} setQuery={setQuery} setViewButton={setViewButton}/>
            <Footer/>
        </>
    )
}

export default App
