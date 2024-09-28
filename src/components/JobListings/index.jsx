import Header from "../Header/index.jsx"
import Table from "../Table/index.jsx"
import { useEffect, useState } from "react"

const JobListings = ({currentPage, setCurrentPage, query, header, setHeader, getSelected, setSelected, setQuery, setSearchTerm }) => {
    const [allJobs, setAllJobs] = useState([])
    const [jobInfo, setJobInfo] = useState([])
    const [jobsPerPage] = useState(10)

    const resetQuery = () => {
        setSearchTerm('')
        setSelected('')
        setQuery('http://0.0.0.0:8080/jobs/recent')
        setCurrentPage(1)
        setHeader('Most recent jobs')
    }

    useEffect(() => {
        const getJobInfo = async () => {
            const response = await fetch(query)
            const data = await response.json()

            let filteredData = data

            if (getSelected === 'Full time') {
                filteredData = data.filter((job) => job.type === 'Full time')
            } else if (getSelected === 'Part time') {
                filteredData = data.filter((job) => job.type === 'Part time')
            } else if (getSelected === 'Contract') {
                filteredData = data.filter((job) => job.type === 'Contract')
            }

            setAllJobs(filteredData)

            const indexOfLastJob = currentPage * jobsPerPage
            const indexOfFirstJob = indexOfLastJob - jobsPerPage
            const currentJobs = filteredData.slice(indexOfFirstJob, indexOfLastJob)
            setJobInfo(currentJobs)
        }

        getJobInfo()
    }, [query, getSelected, currentPage, jobsPerPage])

    const totalJobs = allJobs.length
    const totalPages = Math.ceil(totalJobs / jobsPerPage)

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <main className="mx-auto container justify-content-center col-12 col-md-7 p-0">
            <div className="d-flex justify-content-between p-2">
                <Header header={header} setHeader={setHeader} query={query} />
                <a role="button" className="col-6 pb-2 text-end fs-6 text-decoration-none mt-2" onClick={resetQuery}>
                    Reset Search
                </a>
            </div>

            {jobInfo.length > 0 ? (
                <>
                    <Table jobInfo={jobInfo} />
                    <div className="pagination-controls d-flex justify-content-start justify-content-center justify-content-md-start align-items-center my-3">
                        <a
                            role="button"
                            className="btn btn-outline-primary mx-2"
                            onClick={handlePrevPage}
                            style={{
                                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                                pointerEvents: currentPage === 1 ? "none" : "auto",
                            }}
                        >
                            Previous
                        </a>

                        <span className="mx-3 text-muted">{`${currentPage} of ${totalPages}`}</span>

                        <a
                            role="button"
                            className="btn btn-outline-primary mx-2"
                            onClick={handleNextPage}
                            style={{
                                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                                pointerEvents: currentPage === totalPages ? "none" : "auto",
                            }}
                        >
                            Next
                        </a>
                    </div>
                </>
            ) : (
                <div className="text-center text-muted">No jobs found matching your criteria.</div>
            )}
        </main>
    )
}

export default JobListings
