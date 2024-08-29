const NavFilter = ({jobType, selected: getSelected, click}) => {
    let active = getSelected ? 'link-dark fw-bold' : 'link-secondary'

    return (
        <a className={'col p-0 mx-1 text-end text-decoration-none ' + active} onClick={(click)}>{jobType}</a>
    )
}
export default NavFilter