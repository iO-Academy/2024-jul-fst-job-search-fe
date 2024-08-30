import FilterCheckbox from "../FilterCheckbox/index.jsx";
import {useState} from "react";
import PopularSkills from "../PopularSkills/index.jsx";

const SearchSection = ({getSelected, setSelected}) => {
    const [checkBoxValue, setCheckBoxValue] = useState(
            {'Full time': false,
            'Part time': false,
            'Contract': false
            }
    )

    if (checkBoxValue['Contract'] && checkBoxValue["Full time"] && checkBoxValue['Part time']) {
        setSelected('&type[]=Contract&type[]=Full time&type[]=Part time')
    } else if (checkBoxValue['Contract'] && checkBoxValue["Full time"]){
        setSelected('&type[]=Contract&type[]=Full time')
    } else if (checkBoxValue["Full time"] && checkBoxValue['Part time']) {
        setSelected('&type[]=Full time&type[]=Part time')
    } else if (checkBoxValue['Contract'] && checkBoxValue['Part time']) {
        setSelected('&type[]=Contract&type[]=Part time')
    } else if (checkBoxValue['Contract']) {
        setSelected('&type[]=Contract')
    } else if (checkBoxValue['Full time']) {
        setSelected('&type[]=Full time')
    } else if (checkBoxValue['Part time']) {
        setSelected('&type[]=Part time')
    }

    return (
        <>
            <FilterCheckbox  jobType={checkBoxValue} setTypeBoolean={setCheckBoxValue}/>
            <PopularSkills />
        </>
    )
}
export default SearchSection