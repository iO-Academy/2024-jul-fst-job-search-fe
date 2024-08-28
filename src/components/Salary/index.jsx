import 'bootstrap'
const Salary = ({salary}) => {

    return (
        <div>
            {salary && <span>£{salary.toLocaleString()}</span>}
        </div>
    )
}
export default Salary