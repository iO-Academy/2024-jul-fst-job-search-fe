
const Company = ({logo, jobRole, companyName}) => {

    return (
    <div className={'container mt-2 ms-1'}>
        <img className={'float-start img-responsive me-1'} width={60} height={60} src={logo}/>
        <div className={'container'}>
            <h4 className={'mb-0'}>{jobRole}</h4>
            <p >{companyName}</p>
        </div>
    </div>
    )
}

export default Company