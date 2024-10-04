import {useEffect} from "react"

const Header = ({setHeader, header, query}) => {

    useEffect(() => {
        if (query.includes('Full time')) {
            setHeader('Full Time Jobs')
        } else if (query.includes('Part time')) {
            setHeader('Part Time Jobs')
        } else if (query.includes('Contract')) {
            setHeader('Contracted Jobs')
        } else if (query === 'https://job-search-project.2024-thomask.dev.io-academy.uk/jobs') {
            setHeader('All Jobs')
        }
    }, [setHeader, query])

    return (
        <header>
            <div>
                <h2>{header}</h2>
            </div>
        </header>
    )
}
export default Header