import SkillBox from "../SkillBox/index.jsx"

const Skills = ({setQuery, setHeader, setSelected}) => {

    return (
        <div className='text-bg-primary py-3'>
            <h2 className='container col-10 col-md-7 text-white mb-3 text-center text-md-start'>
                Select to Filter by Skill
            </h2>
            <div className='container d-flex col-8 col-md-7'>
                <SkillBox setSelected={setSelected} setHeader={setHeader} setQuery={setQuery}/>
            </div>
        </div>

    )
}

export default Skills