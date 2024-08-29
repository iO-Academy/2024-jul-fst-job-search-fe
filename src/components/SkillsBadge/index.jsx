import {useState} from "react";

const SkillsBadge = ({itemSkills}) => {
    return (
        <>
            {
                itemSkills.map((skill) => {
                        // console.log(skill.skill)
                        return (
                            <span key={skill.id} className="badge text-bg-info text-light mx-1">{skill.skill}</span>
                        )
                    }
                )
            }
        </>
    )
}
export default SkillsBadge