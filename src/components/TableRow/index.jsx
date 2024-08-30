import Company from "../Company/index.jsx";
import TypeBadge from "../TypeBadge/index.jsx";
import Salary from "../Salary/index.jsx";
import SkillsBadges from "../SkillsBadges/index.jsx";

const TableRow = ({jobTitle, company, logo, contract, salary, skills, setSkillQuery, setTypeQuery}) => {
    return (

        <tr>
            <td>
                <Company logo={logo} jobTitle={jobTitle} companyName={company}/>
            </td>
            <td>
                <TypeBadge setTypeQuery={setTypeQuery} jobType={contract} bgColor={'bg-primary'}/>
            </td>
            {salary ? <td><Salary salary={salary}/></td>
                : <td className='text-center'>competitive</td>}
            <td className='fs-6'>
                <SkillsBadges setSkillQuery={setSkillQuery} itemSkills={skills}/>
            </td>
        </tr>
    )
}
export default TableRow