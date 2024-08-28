const TypeBadge = ({jobType, bgColor = '', textColor = ''}) => {
    return (
        <span className={"badge rounded-pill " + bgColor + textColor}>{jobType}</span>
    )
}

export default TypeBadge