const FilterCheckbox = ({jobType}) => {

    return (
        <div>
            <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault'/>
             <label className='form-check-label' htmlFor='flexCheckDefault'>{jobType}</label>

        </div>
    )
}
export default FilterCheckbox