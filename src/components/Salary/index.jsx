import 'bootstrap'

const Salary = ({salary}) => {
    return (
        salary ? <span>£{salary.toLocaleString()}</span> : <span>Competitive</span>
    )
}
export default Salary