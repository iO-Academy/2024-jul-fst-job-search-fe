
const SkillsBadge = ({itemSkills}) => {
    return (
        <>
            {
                itemSkills?.map((skill) => {
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