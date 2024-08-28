import TypeBadge from "../TypeBadge/index.jsx";
import Salary from "../Salary/index.jsx";
import SkillsBadge from "../SkillsBadge/index.jsx";
import {useEffect} from "react";
import {useState} from "react";
const JobDescriptionModal = ({id}) => {

    const [jobInfo, setJobInfo] = useState([])

    useEffect(() => {
        const getJobInfo = async () => {
            const response = await fetch (`http://0.0.0.0:8080/jobs/${id}`)
            const data = await response.json()
            setJobInfo(data)
        }
        getJobInfo()
    },[])

    console.log(jobInfo)


    return (
        <div className={'show.bs.modal'}>
            <div className={'modal-dialog'}>
                <div className={'modal-content'}>
                    <div className={'modal-header'}>
                        <h2>{jobInfo.job_title} - {jobInfo.company}</h2>
                        <hr className={'opacity-50'}></hr>
                    </div>
                    <div className={'modal-body'}>
                        <div className={'container bg-primary'}>
                            <h1 className={'text-bg-primary'}>{jobInfo.job_title}</h1>
                            <TypeBadge jobType={'type'}></TypeBadge>
                        </div>
                        <div className={'container mt-2 ms-1'}>
                            <img className={'float-start img-responsive me-1'} width={60} height={60} src={jobInfo.logo}/>
                                <p>{jobInfo.company}</p>
                        </div>
                        <h3>Key facts:</h3>
                        <div className={'container'}>
                            <div className={'row'}>
                                <div className={'col'}>
                                    Salary:
                                </div>
                                <div className={'col'}>
                                    Type:
                                </div>
                                <div className={'col'}>
                                    Date posted:
                                </div>
                                <div className={'col'}>
                                    Skills:
                                </div>
                            </div>

                            <div className={'row'}>
                                <div className={'col'}>
                                    <Salary salary={jobInfo.salary}/>
                                </div>
                                <div className={'col'}>
                                    <TypeBadge jobType={jobInfo.type}/>
                                </div>
                                <div className={'col'}>
                                    {jobInfo.posted}
                                </div>
                                <div className={'col'}>

                                    {/*{*/}

                                    {/*    jobInfo.skills.map((skill) => {*/}
                                    {/*        return (*/}
                                    {/*                <SkillsBadge key ={skill.id} skillName={skill.skill}/>*/}
                                    {/*            )*/}
                                    {/*    })*/}
                                    {/*}*/}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'modal-footer'}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDescriptionModal