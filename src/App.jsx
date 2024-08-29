import JobListings from "./components/JobListings/index.jsx";
import Nav from "./components/Navbar/index.jsx";
import Footer from "./components/Footer/index.jsx";
import {useState} from "react";
import SearchSection from "./components/SearchSection/index.jsx";
import {useEffect} from "react";

function App() {
    const [navBarSelected, setNavBarSelected] = useState('')
    const [navBarSearchUrl, setNavBarSearchUrl] = useState('')

    useEffect(() => {
            if (navBarSelected === 'Full time') {
                setNavBarSearchUrl('')
                setNavBarSearchUrl('jobs?type[]=Full time')
            }
            else if (navBarSelected === 'Part time') {
                setNavBarSearchUrl('')
                setNavBarSearchUrl('jobs?type[]=Part time')
            }
            else if (navBarSelected === 'Contract') {
                setNavBarSearchUrl('')
                setNavBarSearchUrl('jobs?type[]=Contract')
            }
            else if (navBarSelected === 'All jobs') {
                setNavBarSearchUrl('')
                setNavBarSearchUrl('jobs')
            }
    }, [navBarSelected]);
    const [fetchURLSuffix, setFetchURLSuffix] = useState('jobs/recent')

    useEffect(() => {
        if (navBarSearchUrl) {
            setFetchURLSuffix(navBarSearchUrl)
        }
    }, [navBarSearchUrl]);


    const [filterBarSelected, setFilterBarSelected] = useState('')
    console.log(navBarSelected)
    console.log(navBarSearchUrl)
    return (
        <>
            <Nav getSelected={navBarSelected} setSelected={setNavBarSelected}/>
            <SearchSection getSelected={filterBarSelected} setSelected={setFilterBarSelected}/>
            <JobListings urlSuffix={fetchURLSuffix}/>
            <Footer/>
        </>
    )
}

export default App
