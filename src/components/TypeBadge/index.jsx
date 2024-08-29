const TypeBadge = ({jobType, bgColor = ''}) => {
    return (
        <span className={"badge rounded-pill " + bgColor}>{jobType}</span>
    )
}
export default TypeBadge