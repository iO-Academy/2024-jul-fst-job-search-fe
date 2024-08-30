const Header = ({headerText}) => {
    return (
        <header>
            <div className='row align-items-center justify-content-between mx-1 mx-md-0'>
                <h2 className='col-5 my-3 px-md-0 px-0 mx-1'>{headerText}</h2>
                <a className='col-5 text-end fs-6 text-decoration-none px-md-0 px-0 mx-1'>View all jobs -></a>
            </div>
        </header>
    )
}
export default Header