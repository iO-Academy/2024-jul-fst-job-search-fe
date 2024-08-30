const CheckBox = ({label, checkBoxUrl, setCheckBoxUrl}) => {
    console.log(label)
    const checkBoxEventListener = () => {
        // if (label === 'Full time') {
        //     setCheckBoxUrl('type[]=Full time' )
        // } else if (label === 'Part time') {
        //     setCheckBoxUrl('type[]=Part time')
        // } else if (label === 'Contract') {
        //     setCheckBoxUrl('type[]=Contract')
        //
        // }
        setCheckBoxUrl(label)
        if (checkBoxUrl) {
            if (checkBoxUrl.includes(label)){
                setCheckBoxUrl(checkBoxUrl.replace(label, ''))
            } else {
                setCheckBoxUrl(checkBoxUrl + '&' + label)
            }
        }

    }
    console.log(checkBoxUrl)

    return (
            <div className='form-check'>
                <input className='checkbox form-check-input' type='checkbox' onChange={checkBoxEventListener}/>
                <label className='form-check-label text-nowrap text-white'>{label}</label>
            </div>
    )
}

export default CheckBox