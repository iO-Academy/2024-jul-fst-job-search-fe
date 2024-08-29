import FilterCheckbox from "../FilterCheckbox/index.jsx";
import {useState} from "react";

const SearchSection = ({getSelected, setSelected}) => {
    const [checkBoxValue, setCheckBoxValue] = useState(
        {
        'Full time':false,
        'Part time':false,
        'Contract':false
        }
    )
    console.log(checkBoxValue)
    // const [fullTime, setFullTime] = useState(false)
    // console.log(fullTime)
    // const [partTime, setPartTime] = useState(false)
    // console.log(partTime)
    // const [contract, setContract] = useState(false)
    // console.log(contract)
    //
    // const [finalCheckbox, setFinalCheckbox] = useState('')
    //
    // setFinalCheckbox('&type[]='+fullTime+'&type[]='+partTime+'&type[]='+contract)
    //
    // if (fullTime) {
    //     setSelected('&type[=Full time')
    // }


    return (
        <div>
            <FilterCheckbox jobType='Full time' getSelected={checkBoxValue} setSelected={setCheckBoxValue}/>
            <FilterCheckbox jobType='Part time' getSelected={checkBoxValue} setSelected={setCheckBoxValue}/>
            <FilterCheckbox jobType='Contract' getSelected={checkBoxValue} setSelected={setCheckBoxValue}/>
        </div>
    )
}
export default SearchSection