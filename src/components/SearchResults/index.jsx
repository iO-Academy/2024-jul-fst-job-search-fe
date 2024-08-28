import {useEffect, useState} from "react";

const SearchResults = () => {

    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const getSearchResults = async () => {
            const response = await fetch('http://0.0.0.0:8080/jobs?search=developer')
            const data = await response.json()
            setSearchResults(data)
        }
        getSearchResults()
    },[])

    console.log(searchResults)

    return (

    )
}

export default SearchResults