import JobListings from "./components/JobListings/index.jsx";
import Nav from "./components/Navbar/index.jsx";
import Footer from "./components/Footer/index.jsx";
import {useState} from "react";
import SearchSection from "./components/SearchSection/index.jsx";
import {useEffect} from "react";

function App() {
    const [navBarSelected, setNavBarSelected] = useState('')
    const [navBarSearchUrl, setNavBarSearchUrl] = useState('')
    const [navBarUrlSuffix, setNavBarUrlSuffix] = useState('')
    const [filterBarSelected, setFilterBarSelected] = useState('')
    const [skillQuery, setSkillQuery] = useState('')



    useEffect(() => {
            if (navBarSelected === 'Full time') {
                setNavBarSearchUrl('')
                setSkillQuery('')
                setNavBarSearchUrl('jobs?type[]=Full time')
            }
            else if (navBarSelected === 'Part time') {
                setNavBarSearchUrl('')
                setSkillQuery('')
                setNavBarSearchUrl('jobs?type[]=Part time')
            }
            else if (navBarSelected === 'Contract') {
                setNavBarSearchUrl('')
                setSkillQuery('')
                setNavBarSearchUrl('jobs?type[]=Contract')
            }
            else if (navBarSelected === 'All jobs') {
                setNavBarSearchUrl('')
                setSkillQuery('')
                setNavBarSearchUrl('jobs')
            }
    }, [navBarSelected]);


    useEffect(() => {
        if (navBarSearchUrl) {
            setNavBarUrlSuffix(navBarSearchUrl)
        }
    }, [navBarSearchUrl]);


    console.log(navBarSelected)
    console.log(navBarSearchUrl)

    return (
        <>
            <Nav getSelected={navBarSelected} setSelected={setNavBarSelected}/>
            <SearchSection getSelected={filterBarSelected} setSelected={setFilterBarSelected}/>
            <JobListings  navBarUrlSuffix={navBarUrlSuffix} setNavBarUrlSuffix={setNavBarUrlSuffix} skillQuery={skillQuery} setSkillQuery={setSkillQuery}/>
            <Footer/>
        </>
    )
}

export default App
