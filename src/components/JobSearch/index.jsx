import './style.css'
import {useState, useEffect} from "react";
import CheckBox from "../CheckBox/index.jsx";
import PopularSkills from "../PopularSkills/index.jsx";
import FilterCheckbox from "../FilterCheckbox/index.jsx";
const JobSearch = ({setQuery, setHeader, setViewButton, checkBoxUrl, setCheckBoxUrl,filterBarSelected, setFilterBarSelected}) => {

    const [input, setInput] = useState('')

    const takeInput = (event) => {
        setInput(event.target.value)
    }


    const constructQuery = () => {
        setQuery('jobs?search='+input+filterBarSelected)
        setHeader('Search results')
        setViewButton('View most recent jobs ->')
    }
    const [checkBoxValue, setCheckBoxValue] = useState(
            {'Full time': false,
                'Part time': false,
                'Contract': false
            }
        )

        if (checkBoxValue['Contract'] && checkBoxValue["Full time"] && checkBoxValue['Part time']) {
            setFilterBarSelected('&type[]=Contract&type[]=Full time&type[]=Part time')
        } else if (checkBoxValue['Contract'] && checkBoxValue["Full time"]){
            setFilterBarSelected('&type[]=Contract&type[]=Full time')
        } else if (checkBoxValue["Full time"] && checkBoxValue['Part time']) {
            setFilterBarSelected('&type[]=Full time&type[]=Part time')
        } else if (checkBoxValue['Contract'] && checkBoxValue['Part time']) {
            setFilterBarSelected('&type[]=Contract&type[]=Part time')
        } else if (checkBoxValue['Contract']) {
            setFilterBarSelected('&type[]=Contract')
        } else if (checkBoxValue['Full time']) {
            setFilterBarSelected('&type[]=Full time')
        } else if (checkBoxValue['Part time']) {
            setFilterBarSelected('&type[]=Part time')
        } else if (!(checkBoxValue['Contract'] && checkBoxValue["Full time"] && checkBoxValue['Part time'])) {
            setFilterBarSelected('')
        }



    return (
        <div className='backgroundPic container-fluid bg-secondary py-5 px-4'>
            <div className='container-fluid col-lg-7'>
                <h1 className='text-white display-1 py-3'>Find your perfect job</h1>
                <input className='col-12 rounded-2 border-0' onChange={takeInput} type='text' placeholder='Keyword/Skill/Company Name' name='searchTerm' id='searchTerm'/>
                <div className='d-flex flex-row py-2'>
                    <div className='checkboxes container-fluid d-flex flex-wrap gap-1 p-1'>
                        <FilterCheckbox jobType={checkBoxValue} setTypeBoolean={setCheckBoxValue} />
                    </div>
                    <div className='container d-flex align-items-start gap-1 p-1 justify-content-end'>
                        <small className='text-nowrap text-end text-white'>Popular skills:</small>
                        <PopularSkills />
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