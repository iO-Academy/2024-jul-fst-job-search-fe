import { useEffect, useState } from "react"

const SkillBox = ({ setQuery, setHeader, setSelected }) => {
    const [skills, setSkills] = useState([])

    const clickSkill = (id, skill) => {
        setQuery('https://job-search-project.2024-thomask.dev.io-academy.uk/jobs?skill=' + id)
        setHeader(`${skill} Jobs`)
        setSelected('')
    }

    useEffect(() => {
        const getSkills = async () => {
            const response = await fetch('https://job-search-project.2024-thomask.dev.io-academy.uk/skills')
            const data = await response.json()
            setSkills(data)
        }
        getSkills()
    }, [])

    return (
        <>
            <div className="row">
                {skills.map((item, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => clickSkill(item.id, item.skill)}
                            className="col-sm-6 col-md-4 col-lg-3 p-2 mb-3 text-center"
                            role="button">
                            <div className="border border-white rounded p-3 bg-primary text-white shadow-sm h-100">
                                <h2 className="fs-5 m-0">{item.skill}</h2>
                                <h6 className="text-light mt-1">{item.job_count} Jobs</h6>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SkillBox
