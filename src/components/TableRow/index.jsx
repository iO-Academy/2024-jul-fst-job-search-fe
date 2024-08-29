import Company from "../Company/index.jsx";
import TypeBadge from "../TypeBadge/index.jsx";
import Salary from "../Salary/index.jsx";
import SkillsBadges from "../SkillsBadges/index.jsx";
import {useState} from "react";

const TableRow = ({jobTitle, company, logo, contract, salary, skills, jobIdSelector, jobId, skillQuery, setSkillQuery}) => {



    return (
        <tr >
            <td onClick={() => {jobIdSelector(jobId)}}
                data-bs-toggle='modal'
                data-bs-target='#jobDescription'>
                <Company logo={logo} jobTitle={jobTitle} companyName={company}/>
            </td>
            <td>
                <TypeBadge jobType={contract} bgColor={'bg-primary'}/>
            </td>
            <td>
                <Salary salary={salary}/>
            </td>
            <td className='fs-6'>
                <SkillsBadges itemSkills={skills} setSkillQuery={setSkillQuery} skillQuery={skillQuery}/>
            </td>
        </tr>
    )
}
export default TableRow