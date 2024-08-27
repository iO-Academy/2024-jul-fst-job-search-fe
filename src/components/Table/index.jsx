import TableRow from "../TableRow/index.jsx";

const Table = () => {
    return (
        <table className={'table table-dark table-striped  col-md-6'}>
            <thead>
            <tr>
                <th scope={'col'}>Job title/Company</th>
                <th scope={'col'}>Type</th>
                <th scope={'col'}>Salary</th>
                <th scope={'col'}>Skills</th>
            </tr>
            </thead>
            <tbody>
            <TableRow jobTitle={'Dev at Google'} contract={'full title'} salary={'£30,000'} skills={'React'} />
            <TableRow jobTitle={'Dev at Facebook'} contract={'part-time'} salary={'£28,000'} skills={'PHP'}/>
            <TableRow jobTitle={'Dev at Apple'} contract={'full title'} salary={'£100,000'} skills={'Being a genius'}/>
            <TableRow jobTitle={'Dave at Google'} contract={'full title'} salary={'£30,000'} skills={'React'}/>
            </tbody>

        </table>


    )
}

export default Table