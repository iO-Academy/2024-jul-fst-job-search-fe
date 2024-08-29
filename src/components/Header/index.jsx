const Header = ({headerText}) => {
    return (
        <header>
            <div className='row align-items-center justify-content-between mx-1'>
                <h2 className='col-6 my-3'>{headerText}</h2>
                <a className='col-5 text-end fs-6 text-decoration-none'>View all jobs -></a>
            </div>
        </header>
    )
}
export default Header