import TableRow from "../TableRow/index.jsx";


const Table = ({recentJobInfo}) => {
    return (
        <table className='table table-dark table-striped ms-1 ms-md-0 table-sm'>
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
                recentJobInfo.map((item) => {
                        return (
                            <TableRow
                                key={item.id}
                                jobTitle={item.job_title}
                                company={item.company}
                                contract={item.type}
                                salary={item.salary}
                                skills={item.skills}
                                logo={item.logo}
                            />
                        )
                    }
                )
            }
            </tbody>
        </table>
    )
}
export default Table

