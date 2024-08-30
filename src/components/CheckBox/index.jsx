const CheckBox = ({label}) => {
    return (
            <div className='form-check'>
                <input className='checkbox form-check-input' type='checkbox'/>
                <label className='form-check-label text-nowrap text-white'>{label}</label>
            </div>
    )
}

export default CheckBox