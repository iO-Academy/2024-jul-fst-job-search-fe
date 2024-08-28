import 'bootstrap'
const Salary = ({salary}) => {
    return (
        <div>
            <span>£{salary.toLocaleString()}</span>
        </div>
    )
}
export default Salary