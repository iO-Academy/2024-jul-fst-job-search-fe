import TypeBadge from "../TypeBadge/index.jsx";
import Salary from "../Salary/index.jsx";
import SkillsBadge from "../SkillsBadge/index.jsx";
import {useEffect} from "react";
import {useState} from "react";

const JobDescriptionModal = ({id}) => {

    const [jobInfo, setJobInfo] = useState([])

    useEffect(() => {
        const getJobInfo = async () => {
            const response = await fetch(`http://0.0.0.0:8080/jobs/${id}`)
            const data = await response.json()
            setJobInfo(data)
        }
        getJobInfo()
    }, [])

    return (
        <div>
            <button type={'button'} className={'btn btn-primary'} data-bs-toggle={'modal'}
                    data-bs-target={'#jobDescription'}>Click Me
            </button>

            <div className={'modal'} id={'jobDescription'}>
                <div className={'modal-dialog modal-lg'}>
                    <div className={'modal-content'}>
                        <div className={'modal-header d-flex justify-content-between align-items-center'}>
                            <p className={'text-center m-0'}>{jobInfo.job_title} - {jobInfo.company}</p>
                            <button type={'button'} className={'btn btn-sm btn-outline-info border-0'}
                                    data-bs-dismiss={'modal'}>ⅹ</button>
                        </div>
                        <div className={'modal-body'}>
                            <div className={'container d-flex p-4 gap-2 align-items-center bg-primary mb-4'}>
                                <p className={'text-bg-primary m-0'}>{jobInfo.job_title}</p>
                                {jobInfo.type ? <TypeBadge jobType={jobInfo.type} bgColor={'bg-success'}/> : null}
                            </div>
                            <div className={'container d-flex m-1 align-items-center'}>
                                <img className={'float-start img-responsive me-1'} width={40} height={40}
                                     src={jobInfo.logo}/>
                                <p className={'m-0'}>{jobInfo.company}</p>
                            </div>

                            <div className={'container m-1'}>
                                <div className={'row'}>
                                    <h5>Key facts:</h5>
                                </div>
                                <div className={'row'}>
                                    <div className={'col-3'}>
                                        Salary:
                                    </div>
                                    <div className={'col-3'}>
                                        Type:
                                    </div>
                                    <div className={'col-3'}>
                                        Date posted:
                                    </div>
                                    <div className={'col-3'}>
                                        Skills:
                                    </div>
                                </div>

                                <div className={'row'}>
                                    <div className={'col-3'}>
                                        <Salary salary={jobInfo.salary}/>
                                    </div>
                                    <div className={'col-3'}>
                                        {jobInfo.type ? jobInfo.type : 'N/A'}
                                    </div>
                                    <div className={'col-3'}>
                                        {jobInfo.posted && jobInfo.posted.split("-").reverse().join("/")}
                                    </div>
                                    <div className={'col-3 d-flex flex-wrap gap-1'}>

                                        {
                                            jobInfo.skills && jobInfo.skills.map((skill) => {
                                                return (
                                                    <SkillsBadge key={skill.id} skillName={skill.skill}/>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                                <div className={'mt-1'}>
                                    <h5>Job Description:</h5>
                                    <p>{jobInfo.job_description}</p>
                                </div>
                            </div>
                        </div>
                        <div className={'modal-footer d-flex justify-content-start'}>
                            <button className={'btn btn-success'}>Apply now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDescriptionModal
