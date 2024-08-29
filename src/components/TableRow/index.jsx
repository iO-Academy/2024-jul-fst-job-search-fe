import Company from "../Company/index.jsx";
import TypeBadge from "../TypeBadge/index.jsx";
import Salary from "../Salary/index.jsx";
import SkillsBadges from "../SkillsBadges/index.jsx";

const TableRow = ({jobTitle, company, logo, contract, salary, skills, jobIdSelector, jobId}) => {
    return (
        <tr onClick={() => {jobIdSelector(jobId)}}
            data-bs-toggle='modal'
            data-bs-target='#jobDescription'>
            <td>
                <Company logo={logo} jobTitle={jobTitle} companyName={company}/>
            </td>
            <td>
                <TypeBadge jobType={contract} bgColor={'bg-primary'}/>
            </td>
            <td>
                <Salary salary={salary}/>
            </td>
            <td className='fs-6'>
                <SkillsBadges itemSkills={skills}/>
            </td>
        </tr>
    )
}
export default TableRow