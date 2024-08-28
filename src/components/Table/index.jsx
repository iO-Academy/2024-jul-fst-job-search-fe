import TableRow from "../TableRow/index.jsx";

const Table = ({recentJobInfo}) => {
    console.log(recentJobInfo)
    return (
        <table className={'table table-dark table-striped  col-md-8'}>
            <thead>
            <tr>
                <th scope={'col'}>Job title / Company</th>
                <th scope={'col'}>Type</th>
                <th scope={'col'}>Salary</th>
                <th scope={'col'}>Skills</th>
            </tr>
            </thead>
            <tbody>
            {
                recentJobInfo.map((item) => {
                    return (
                    <TableRow jobTitle={item.job_title} company={item.company} logo={item.logo} contract={item.type} salary={item.salary || null} skills={item.skills.map((itemSkills)=> {
                        return (
                            itemSkills.skill + ' '
                        )
                    })}/>
                    )
                })

            }

            </tbody>
        </table>
    )
}
export default Table

// skills={item.skills.map((itemSkill)=> { itemSkill.skill})