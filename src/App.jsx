import JobListings from "./components/JobListings/index.jsx";
import Nav from "./components/Navbar/index.jsx";
import Footer from "./components/Footer/index.jsx";
import {useState} from "react";
import SearchSection from "./components/SearchSection/index.jsx";

function App() {
    const [navBarSelected, setNavBarSelected] = useState('')
    const [filterBarSelected, setFilterBarSelected] = useState('')
    console.log(filterBarSelected)
    console.log(navBarSelected)

    return (
        <>
            <Nav getSelected={navBarSelected} setSelected={setNavBarSelected}/>
            <SearchSection getSelected={filterBarSelected} setSelected={setFilterBarSelected}/>
            <JobListings/>
            <Footer/>
        </>
    )
}

export default App
