import {useEffect, useState} from "react";

const SkillBox = ({setHeader, setQuery, setViewButton}) => {

    const clickSkill = (id) => {
        setHeader('Search results')
        setQuery('http://0.0.0.0:8080/jobs?skill='+id)
        setViewButton('View most recent jobs ->')
    }

    const [skills, setSkills] = useState([])

    useEffect( () => {
            const getSkills = async () => {
                const response = await fetch('http://0.0.0.0:8080/skills')
                const data = await response.json()
                setSkills(data)
            }
            getSkills()
        },[]
    )

    return (
        <>
        {
            skills.map((item, index) => {
                    console.log(item)
                    return (
                        <div key={index} onClick={() => clickSkill(item.id)}
                             className='border border-black pb-2 col-5 col-md-3 p-7 px-md-7 me-4 mb-3 me-md-0'>
                            <h2 className='pt-2 text-start text-md-center p-7 fs-5 m-0 px-1 px-md-7'>{item.skill}</h2>
                            <h6 className='text-dark ms-1 text-start text-md-center px-1 m-0 fs-6 px-md-7 m-md-0'>{item.job_count} Jobs</h6>
                        </div>
                    )
                }
            )
            }
        </>
    )

}
export default SkillBox