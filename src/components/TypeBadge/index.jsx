const TypeBadge = ({jobType, bgColor = '', setTypeQuery}) => {

    const constructTypeQuery = () => {
        setTypeQuery(`type[]=`+ jobType)
    }

    return (
        <span className={"badge rounded-pill " + bgColor} onClick={constructTypeQuery}>{jobType}</span>
    )

}
export default TypeBadge