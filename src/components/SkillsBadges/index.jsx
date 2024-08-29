import {useState} from "react";

const SkillsBadges = ({itemSkills, setSkillQuery}) => {

    return (
        <>
            {
                itemSkills?.map((skill) => {

                    const constructSkillQuery = () => {
                        setSkillQuery(`skill=` + skill.id)

                    }

                        return (
                            <span key={skill.id} onClick={constructSkillQuery} className="badge text-bg-info text-light mx-1">{skill.skill}</span>
                    )

                    }
                )
            }
        </>
    )
}
export default SkillsBadges