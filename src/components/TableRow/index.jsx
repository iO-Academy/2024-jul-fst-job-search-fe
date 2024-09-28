import Company from "../Company/index.jsx"
import TypeBadge from "../TypeBadge/index.jsx"
import Salary from "../Salary/index.jsx"
import SkillsBadges from "../SkillsBadges/index.jsx"

const TableRow = ({jobTitle, company, logo, contract, salary, skills}) => {
    return (

        <tr onClick={() => {jobIdSelector(jobId)}}
            data-bs-toggle='modal'
            data-bs-target='#jobDescription'
            role='button'>
            <td className='p-1'>
                <Company logo={logo} jobTitle={jobTitle} companyName={company}/>
            </td>
            <td className='p-1'>
                <TypeBadge jobType={contract} bgColor={'bg-primary'}/>
            </td>
            <td className='p-1'>
                <Salary salary={salary}/>
            </td>
            <td className='fs-6 p-1'>
                <SkillsBadges itemSkills={skills}/>
            </td>
        </tr>
    )
}
export default TableRow