import Header from "../Header/index.jsx";
import Table from "../Table/index.jsx";
import {useEffect, useState} from "react";

const JobListings = ({query, header, viewButton}) => {

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
                <Header header={header} viewButton={viewButton}/>
                <Table recentJobInfo={recentJobInfo} />
        </main>
    )
}
export default JobListings