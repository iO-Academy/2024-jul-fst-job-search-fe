import 'bootstrap'
const Salary = ({salary}) => {
    return (

            <span>£{salary.toLocaleString()}</span>

    )
}
export default Salary