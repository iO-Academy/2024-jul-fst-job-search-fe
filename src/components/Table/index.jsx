import TableRow from "../TableRow/index.jsx";
import SkillsBadge from "../SkillsBadge/index.jsx";
import TypeBadge from "../TypeBadge/index.jsx";
import Salary from "../Salary/index.jsx";

const Table = ({recentJobInfo}) => {
    console.log(recentJobInfo)
    return (
        <table className={'table table-dark table-striped col-md-8'}>
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
                        <TableRow
                            key={item.id}
                            jobTitle={item.job_title}
                            company={item.company} logo={item.logo}
                            contract={<TypeBadge jobType={item.type}/>}
                            salary={item.salary && <Salary salary={item.salary}/>}
                            skills={item.skills.map((itemSkills) => {
                                return (
                                    <SkillsBadge
                                        key={itemSkills.id}
                                        itemSkills={itemSkills.skill}/>
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

