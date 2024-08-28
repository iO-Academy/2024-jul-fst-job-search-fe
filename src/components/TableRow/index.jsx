import Company from "../Company/index.jsx";
import TypeBadge from "../TypeBadge/index.jsx";
import Salary from "../Salary/index.jsx";
import SkillsBadge from "../SkillsBadge/index.jsx";

const TableRow = ({jobTitle, company, logo, contract, salary, skills}) => {
    console.log(skills)
    return (

        <tr>
            <td className='container d-md-flex'>
                <Company logo={logo} jobTitle={jobTitle} companyName={company}/>
            </td>
            <td>
                <TypeBadge jobType={contract} />
            </td>
            {salary ? <td><Salary salary={salary} /></td>
                :<td className='text-center'>competitive</td>}
            <td className='fs-6'>
                <SkillsBadge itemSkills={skills}/>
            </td>
        </tr>
    )
}
export default TableRow