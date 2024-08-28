const TableRow = ({jobTitle, company, logo, contract, salary, skills}) => {

    return (
        <tr>

            <td className={'container d-flex'}>
                <img className={'d-none d-md-inline h-25 w-25'} src={logo} />
                <div className={'ps-2'}>
                    <h5>{jobTitle}</h5>
                    <h6>{company}</h6>
                </div>
            </td>
            <td>{contract}</td>
            {salary ? <td>£{salary}</td>:<td className={'text-center'}>competitive</td>}
            <td>{skills}</td>
        </tr>

    )
}

export default TableRow