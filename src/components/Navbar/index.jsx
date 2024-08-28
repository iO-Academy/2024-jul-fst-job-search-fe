const Navbar = () => {
    return (
        <nav className={'navbar bg-light'}>
            <div className={'container justify-content-between'}>
                <a className={'navbar-brand'}>JobSearch</a>
                <div className={'row col-md-5 d-none d-md-inline text-center'}>
                    <a className={'col p-0 mx-1 text-end text-decoration-none link-dark'}>All Jobs</a>
                    <a className={'col p-0 mx-1 text-end text-decoration-none link-secondary'}>Full time</a>
                    <a className={'col p-0 mx-1 text-end text-decoration-none link-secondary'}>Part time</a>
                    <a className={'col p-0 mx-1 text-end text-decoration-none link-secondary'}>Contract</a>
                </div>
                <button className={'navbar-toggler border mb-2 d-md-none'} type={'button'} data-bs-toggle={'collapse'}
                data-bs-target={'#navbarSupportedContent'}>
                    <span className={'navbar-toggler-icon border-0'}></span>
                </button>
                <div className={'collapse navbar-collapse border-0'} id={'navbarSupportedContent'}>
                        <a className={'dropdown-item text-end'}>All Jobs</a>
                        <a className={'dropdown-item text-end'}>Full time</a>
                        <a className={'dropdown-item text-end'}>Part time</a>
                        <a className={'dropdown-item text-end'}>Contract</a>
                </div>
                <button className={'border border-success d-none d-md-inline rounded text-success'}>Post a job</button>
            </div>
        </nav>
    )
}
export default Navbar