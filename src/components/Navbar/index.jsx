const Navbar = () => {
    return (
        <nav className={'navbar bg-light'}>
            <div className={'container-fluid'}>
                <a className={'navbar-brand'}>JobSearch</a>
                <button className={'navbar-toggler border mb-2'} type={'button'} data-bs-toggle={'collapse'}
                data-bs-target={'#navbarSupportedContent'}>
                    <span className={'navbar-toggler-icon border-0'}></span>
                </button>
                <div className={'collapse navbar-collapse border-0'} id={'navbarSupportedContent'}>
                        <a className={'dropdown-item text-end'}>All jobs</a>
                        <a className={'dropdown-item text-end'}>Full-time</a>
                        <a className={'dropdown-item text-end'}>Part-time</a>
                        <a className={'dropdown-item text-end'}>Contract</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar