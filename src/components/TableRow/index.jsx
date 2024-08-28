const TableRow = ({jobTitle, contract, salary, skills}) => {

    return (
        <tr>
            <td>{jobTitle}</td>
            <td>{contract}</td>
            <td>{salary}</td>
            <td>{skills}</td>
        </tr>

    )
}

export default TableRow