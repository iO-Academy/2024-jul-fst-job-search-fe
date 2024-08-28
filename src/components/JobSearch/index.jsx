import SkillsBadge from "../SkillsBadge/index.jsx";
import button from "bootstrap/js/src/button.js";
import './style.css'

const JobSearch = () => {
    return (
        <div className={'backgroundPic container-fluid bg-secondary py-5 px-4'}>
            <div className={'container-fluid col-lg-7'}>
                <h1 className={'text-white display-1 py-3'}>Find your perfect job</h1>
                <input className={'col-12 rounded-2 border-0'} type={'text'}/>
                <div className={'d-flex flex-row py-2'}>
                    <div className={'checkboxes container-fluid d-flex flex-wrap gap-1 p-1'}>
                        <div className={'form-check'}>
                            <input className={'checkbox form-check-input'} type={'checkbox'}/>
                            <label className={'form-check-label text-nowrap text-white'}>Full time</label>
                        </div>
                        <div className={'form-check'}>
                            <input className={'checkbox form-check-input'} type={'checkbox'}/>
                            <label className={'form-check-label text-nowrap text-white'}>Part Time</label>
                        </div>
                        <div className={'form-check'}>
                            <input className={'checkbox form-check-input'} type={'checkbox'}/>
                            <label className={'form-check-label text-nowrap text-white'}>Contract</label>
                        </div>
                    </div>
                    <div className={'container d-flex align-items-start gap-1 p-1 justify-content-end'}>
                        <small className={'text-nowrap text-end text-white'}>Popular skills:</small>
                        <div className={'d-flex flex-wrap gap-1'}>
                            <SkillsBadge skillName={'PHP'}/>
                            <SkillsBadge skillName={'React'}/>
                            <SkillsBadge skillName={'Laravel'}/>
                        </div>
                    </div>
                </div>
                <button className={'btn btn-primary fs-4 py-2'}>Search</button>
            </div>
        </div>
    )
}

export default JobSearch