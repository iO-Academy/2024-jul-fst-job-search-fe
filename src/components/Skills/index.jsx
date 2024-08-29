import {useEffect, useState} from "react";

const Skills = () => {

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

    console.log(skills)

    return (
        <div className='text-bg-primary py-3 d-flex justify-content-center flex-column px-4 col-md-12'>
                <div className='d-flex justify-content-center mx-2 col-md-6'>
                    <h2 className='text-black px-0' >Browse skills</h2>
                </div>
                <div className='container d-flex flex-wrap justify-content-center col-md-8 p-7'>
                    {
                        skills.map((item) => {
                            return (
                                <div className='border border-black pb-2 col-5 col-md-2 m-2 m-md-3 p-7'>
                                    <h2 className='ms-1 pt-2 text-center p-7'>{item.skill}</h2>
                                    <h6 className='text-dark ms-1 text-center'>{item.job_count} Jobs</h6>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default Skills