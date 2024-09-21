import Company from "../Company/index.jsx";
import TypeBadge from "../TypeBadge/index.jsx";
import Salary from "../Salary/index.jsx";
import SkillsBadges from "../SkillsBadges/index.jsx";

const TableRow = ({jobTitle, company, logo, contract, salary, skills, setSkillQuery, setTypeQuery}) => {
    return (

        <tr onClick={() => {jobIdSelector(jobId)}}
            data-bs-toggle='modal'
            data-bs-target='#jobDescription'>
            <td className='p-0'>
                <Company logo={logo} jobTitle={jobTitle} companyName={company}/>
            </td>
            <td className='p-0'>
                <TypeBadge jobType={contract} bgColor={'bg-primary'}/>
            </td>
            <td className='p-0'>
                <Salary salary={salary}/>
            </td>
            <td className='fs-6 p-0'>
                <SkillsBadges itemSkills={skills}/>
            </td>
        </tr>
    )
}
export default TableRow