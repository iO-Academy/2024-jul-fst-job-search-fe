const Company = ({logo, jobTitle, companyName}) => {

    return (
        <div className='container mt-2 d-flex p-0'>
            <img alt='company logo image' className='float-start img-responsive me-1 d-none d-md-inline' width='60'
                 height='60' src={logo}/>
            <div className='container'>
                <h4 className='mb-0 fs-6'>{jobTitle}</h4>
                <p className='fs-6'>{companyName}</p>
            </div>
        </div>
    )
}

export default Company