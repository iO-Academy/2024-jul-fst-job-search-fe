import './App.css'
import JobSearch from "./components/JobSearch/index.jsx"
import {useState, useEffect} from "react"
import JobListings from "./components/JobListings/index.jsx"
import Footer from "./components/Footer/index.jsx"
import Nav from "./components/Navbar/index.jsx"
import Skills from "./components/Skills/index.jsx"

function App() {
    const [navBarSelected, setNavBarSelected] = useState('')
    const [query, setQuery] = useState('https://job-search-project.2024-thomask.dev.io-academy.uk/jobs/recent')
    const [header, setHeader] = useState('Most recent jobs')
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)


    useEffect(() => {
        let newQuery = ''
        if (navBarSelected) {
            newQuery = `https://job-search-project.2024-thomask.dev.io-academy.uk/jobs?type[]=${navBarSelected}`
            setCurrentPage(1)
        }
        if (searchTerm) {
            newQuery = `https://job-search-project.2024-thomask.dev.io-academy.uk/jobs?search=${searchTerm}`
            setCurrentPage(1)
            setHeader('Search Results')
        }
        setQuery(newQuery)
    }, [navBarSelected, searchTerm, setCurrentPage])


    return (
        <>
            <Nav getSelected={navBarSelected} setSelected={setNavBarSelected} />
            <JobSearch setSearchTerm={setSearchTerm} />
            <JobListings currentPage={currentPage} setCurrentPage={setCurrentPage} getSelected={navBarSelected} setSelected={setNavBarSelected} query={query} setQuery={setQuery} header={header} setHeader={setHeader} setSearchTerm={setSearchTerm} />
            <Skills setSelected={setNavBarSelected} setHeader={setHeader} setQuery={setQuery} />
            <Footer />
        </>
    )
}

export default App
