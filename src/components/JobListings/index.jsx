import Header from "../Header/index.jsx";
import Table from "../Table/index.jsx";
import {useEffect, useState} from "react";

const JobListings = () => {

    const [recentJobInfo, setRecentJobInfo] = useState([])
    useEffect(() => {
        const getRecentJobInfo = async () => {
            const response = await fetch('http://0.0.0.0:8080/jobs/recent')
            const data = await response.json()
            setRecentJobInfo(data)
        }
        getRecentJobInfo()
    }, []);
    return (
        <main className='mx-auto container justify-content-center col-12 col-md-7 m-0'>
                <Header />
                <Table recentJobInfo={recentJobInfo} />
        </main>
    )
}
export default JobListings