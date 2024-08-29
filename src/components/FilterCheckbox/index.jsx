import {useState} from "react";

const FilterCheckbox = ({jobType, setTypeBoolean}) => {
    return (
        <>
            {
                Object.keys(jobType).map((eachType) => {
                    const checkBoxHandler = () =>{
                            setTypeBoolean({...jobType, [eachType]: !jobType[eachType]})
                    }
                        return (
                            <div key={eachType}>
                                <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' onChange={checkBoxHandler}/>
                                <label className='form-check-label' htmlFor='flexCheckDefault'>{eachType}</label>
                            </div>

                        )
                    }
                )
            }
        </>
    )
}

    export default FilterCheckbox

