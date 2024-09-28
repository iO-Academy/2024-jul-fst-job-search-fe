import TableRow from "../TableRow/index.jsx"
import JobDescriptionModal from "../JobDescriptionModal/index.jsx"
import {useState} from "react"

const Table = ({jobInfo, setSkillQuery, setTypeQuery}) => {
    const [modalID, setModalID] = useState(1)

    return (
        <div>
            <table className='table table-dark col-12'>
                <thead>
                <tr>
                    <th scope='col'>Job title / Company</th>
                    <th scope='col'>Type</th>
                    <th scope='col'>Salary</th>
                    <th scope='col'>Skills</th>
                </tr>
                </thead>
                <tbody>
                {
                    jobInfo?.map((item) => {
                            return (
                                <TableRow
                                    key={item.id}
                                    jobId={item.id}
                                    jobIdSelector={setModalID}
                                    jobTitle={item.job_title}
                                    company={item.company}
                                    contract={item.type}
                                    salary={item.salary}
                                    skills={item.skills}
                                    logo={item.logo}
                                    setSkillQuery={setSkillQuery}
                                    setTypeQuery={setTypeQuery}

                                />
                            )
                        }
                    )
                }
                </tbody>
            </table>
            <JobDescriptionModal id={modalID}/>
</div>
)
}
export default Table

