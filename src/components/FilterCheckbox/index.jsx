import {useState} from "react";
const FilterCheckbox = ({jobType, getSelected, setSelected}) => {
    const handleChange = () => {
        setSelected(!getSelected)
    }
    return (
        <div>
            <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' onChange={(handleChange)}/>
             <label className='form-check-label' htmlFor='flexCheckDefault'>{jobType}</label>

        </div>
    )
}
export default FilterCheckbox