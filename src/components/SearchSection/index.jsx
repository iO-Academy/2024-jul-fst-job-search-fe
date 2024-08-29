import FilterCheckbox from "../FilterCheckbox/index.jsx";
import {useState} from "react";

const SearchSection = ({getSelected, setSelected}) => {
    // const [checkBoxValue, setCheckBoxValue] = useState(
    //     [
    //     {'Full time':false},
    //     {'Part time':false},
    //     {'Contract':false}
    //     ]
    // )
    const [fullTime, setFullTime] = useState(false)
    console.log(fullTime)
    const [partTime, setPartTime] = useState(false)
    console.log(partTime)
    const [contract, setContract] = useState(false)
    console.log(contract)

    if (fullTime) {
        setSelected('&type[=Full time')
    }


    return (
        <div>
            <FilterCheckbox jobType='Full time' getSelected={fullTime} setSelected={setFullTime}/>
            <FilterCheckbox jobType='Part time' getSelected={partTime} setSelected={setPartTime}/>
            <FilterCheckbox jobType='Contract' getSelected={contract} setSelected={setContract}/>
        </div>
    )
}
export default SearchSection