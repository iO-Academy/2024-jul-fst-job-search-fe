import Header from "../Header/index.jsx";
import Table from "../Table/index.jsx";
import {useEffect, useState} from "react";

const JobListings = ({setQuery, query, setHeader, header, viewButton, setViewButton}) => {

    const [recentJobInfo, setRecentJobInfo] = useState([])
    useEffect(() => {
        const getRecentJobInfo = async () => {
            const response = await fetch(query)
            const data = await response.json()
            setRecentJobInfo(data)
        }
        getRecentJobInfo()
    }, [query]);
    return (
        <main className={'container col-12 col-md-7'}>
                <Header setQuery={setQuery} header={header} setHeader={setHeader} viewButton={viewButton} setViewButton={setViewButton}/>
                <Table recentJobInfo={recentJobInfo} />
        </main>
    )
}
export default JobListings