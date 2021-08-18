import React, { useState} from 'react'

const Form = (props) => {

    const [formData, setFormData] = useState(props.selected)

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(formData)
        props.history.push("/")
    }

    const handleChange = (event) => {
        const t = event.target
        setFormData({...formData, [t.name]: t.value})
    }

    return (
        <form class="weaponForm" onSubmit={handleSubmit}>
            <label for="name">Weapon Name:</label>
            <input name="name" id="name" type="text" value={formData.name} onChange={handleChange}/>

            <label for="description">Description:</label>
            <textarea name="description" id="description" value={formData.description} onChange={handleChange}/>

            <label for="type">Type:</label>
            <input name="type" id="type" type="text" value={formData.type} onChange={handleChange} />

            <label for="attribute">Attribute:</label>
            <input name="attribute" id="attribute" type="text" value={formData.attribute} onChange={handleChange} />

            <label for="damage">Damage:</label>
            <input name="damage" id="damage" type="text" value={formData.damage} onChange={handleChange} />

            <label for="shock">(if melee)Shock:</label>
            <input name="shock" id="shock" type="text" value={formData.shock} onChange={handleChange} />

            <label for="range">(if ranged)Range:</label>
            <input name="range" id="range" type="text" value={formData.range} onChange={handleChange} />

            <label for="magazine">(if ranged)Magazine:</label>
            <input name="magazine" id="magazine" type="number" value={formData.magazine} onChange={handleChange} />

            <label for="encumberance">Encumberance:</label>
            <input name="encumberance" id="encumberance" type="number" value={formData.encumberance} onChange={handleChange} />

            <label for="TL">Tech Level:</label>
            <input name="TL" id="TL" type="number" value={formData.TL} onChange={handleChange} />

            <label for="cost">Cost:</label>
            <input name="cost" id="cost" type="number" value={formData.cost} onChange={handleChange} />

            <input type="submit" value={props.label}/>
        </form>
    )
}
export default Form