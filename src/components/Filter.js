import React, {useState} from 'react'

const Filter = (props) => {

    const [search, setSearch] = useState("")

    const handleChange = (event) => {
        setSearch(event.target.value)
        props.filter(event.target.value)
    }
    return (
        <div className="filter">
            <form>
                <input type="text" onChange={handleChange} value={search} placeholder="search by name" />
            </form>
        </div>
    )
}
export default Filter