import SkillBox from "../SkillBox/index.jsx";

const Skills = ({setHeader, setQuery, setViewButton}) => {



    return (
        <div className='text-bg-primary py-3 col-md-12 col-12'>
                    <h2 className='container justify-content-start col-10 col-md-7 text-black px-0'>Browse skills</h2>
                <div className='container d-flex flex-wrap justify-content-start col-10 col-md-7 px-0'>
                    <SkillBox setHeader={setHeader} setQuery={setQuery} setViewButton={setViewButton}/>
                </div>
        </div>
    )
}

export default Skills