import './style.css'
import {useState, useEffect} from "react";
import CheckBox from "../CheckBox/index.jsx";
const JobSearch = ({setQuery, setHeader, setViewButton}) => {

    const [input, setInput] = useState('')

    const takeInput = (event) => {
        setInput(event.target.value)
    }

    const constructQuery = () => {
        setQuery('http://0.0.0.0:8080/jobs?search='+input)
        setHeader('Search results')
        setViewButton('View most recent jobs ->')
    }

    return (
        <div className='backgroundPic container-fluid bg-secondary py-5 px-4'>
            <div className='container-fluid col-lg-7'>
                <h1 className='text-white display-1 py-3'>Find your perfect job</h1>
                <input className='col-12 rounded-2 border-0' onChange={takeInput} type='text' placeholder='Keyword/Skill/Company Name' name='searchTerm' id='searchTerm'/>
                <div className='d-flex flex-row py-2'>
                    <div className='checkboxes container-fluid d-flex flex-wrap gap-1 p-1'>
                        <CheckBox label={'Full time'}/>
                        <CheckBox label={'Part time'}/>
                        <CheckBox label={'Contract'}/>
                    </div>
                    <div className='container d-flex align-items-start gap-1 p-1 justify-content-end'>
                        <small className='text-nowrap text-end text-white'>Popular skills:</small>
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