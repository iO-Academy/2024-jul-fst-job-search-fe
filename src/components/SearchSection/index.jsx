import FilterCheckbox from "../FilterCheckbox/index.jsx";
import {useState} from "react";
import PopularSkills from "../PopularSkills/index.jsx";

const SearchSection = ({filterBarSelected, setFilterBarSelected}) => {
    const [checkBoxValue, setCheckBoxValue] = useState(
            {'Full time': false,
            'Part time': false,
            'Contract': false
            }
    )
    console.log(checkBoxValue)

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
    }

    return (
        <>
            <FilterCheckbox  jobType={checkBoxValue} setTypeBoolean={setCheckBoxValue}/>
            <PopularSkills />
        </>
    )
}
export default SearchSection