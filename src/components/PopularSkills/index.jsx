import SkillsBadges from "../SkillsBadges/index.jsx";
import {useEffect} from "react";
import data from "bootstrap/js/src/dom/data.js";

const PopularSkills = () => {


    useEffect(() => {
        const getSkills = async () => {
            const response = await fetch('http://0.0.0.0:8080/skills')
            const data = await response.json()
            getSkills(data)
        }
        getSkills()
    }, []);

    return (
            <SkillsBadges></SkillsBadges>
        )

}

export default PopularSkills