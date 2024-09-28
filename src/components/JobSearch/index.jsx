import {useState} from "react"
import PopularSkills from "../PopularSkills/index.jsx"
const JobSearch = ({setSearchTerm}) => {
    const [input, setInput] = useState('')

    const takeInput = (event) => {
        setInput(event.target.value)
    }

    const constructQuery = () => {
        setSearchTerm(input)
        setInput('')
    }


    return (
        <div className='backgroundPic container-fluid bg-dark py-5 px-4'>
            <div className='transparent container-fluid col-lg-7'>
                <h1 className='text-white display-4 display-md-3 display-lg-1 py-3'>Find your perfect job</h1>
                <input
                    className='col-12 rounded-2 border-0'
                    onChange={takeInput}
                    value={input}
                    type='text'
                    placeholder='Keyword/Skill/Company Name'
                    name='searchTerm'
                    id='searchTerm'/>
                <div className='d-flex flex-row py-2'>
                    <div className='container d-flex align-items-start gap-1 p-1 justify-content-end'>
                        <small className='text-nowrap text-end text-white d-none'>Popular skills:</small>
                        <PopularSkills/>
                        <div className='d-flex flex-wrap gap-1'>
                        </div>
                    </div>
                </div>
                <button className='btn btn-primary fs-4 py-2' onClick={constructQuery}>Search</button>
            </div>
        </div>
    )
}
export default JobSearch
