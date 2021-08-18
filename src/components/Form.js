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
        <form className="weaponForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Weapon Name:</label>
            <input name="name" id="name" type="text" value={formData.name} onChange={handleChange}/>

            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description" value={formData.description} onChange={handleChange}/>

            <label htmlFor="type">Type:</label>
            <div className="form-TL">
                    <div>
                        <input 
                            type="radio" 
                            id="melee" 
                            name="type" 
                            value="melee" 
                            checked={formData.type === "melee"} 
                            onChange={handleChange}
                        />
                        <label htmlFor="melee">Melee</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="ranged" 
                            name="type" 
                            value="ranged" 
                            checked={formData.type === "ranged"} 
                            onChange={handleChange}
                        />
                        <label htmlFor="ranged">Ranged</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="heavy" 
                            name="type" 
                            value="heavy" 
                            checked={formData.type === "heavy"} 
                            onChange={handleChange}
                        />
                        <label htmlFor="heavy">Heavy</label>
                    </div>
                </div>
            {/* <input name="type" id="type" type="text" value={formData.type} onChange={handleChange} /> */}

            <label htmlFor="attribute">Attribute:</label>
            <input name="attribute" id="attribute" type="text" value={formData.attribute} onChange={handleChange} placeholder="Dex, Str, Dex/Str, etc"/>

            <label htmlFor="damage">Damage:</label>
            <input name="damage" id="damage" type="text" value={formData.damage} onChange={handleChange} placeholder="1d6"/>

            <label htmlFor="shock">(if melee)Shock:</label>
            <input name="shock" id="shock" type="text" value={formData.shock} onChange={handleChange} placeholder="2/AC13"/>

            <label htmlFor="range">(if ranged)Range:</label>
            <input name="range" id="range" type="text" value={formData.range} onChange={handleChange} placeholder="0/100"/>

            <label htmlFor="magazine">(if ranged)Magazine:</label>
            <input name="magazine" id="magazine" type="number" value={formData.magazine} onChange={handleChange} />

            <label htmlFor="encumberance">Encumberance:</label>
            <input name="encumberance" id="encumberance" type="number" value={formData.encumberance} onChange={handleChange} />

            <label htmlFor="TL">Tech Level:</label>
                <div className="form-TL">
                    <div>
                        <input 
                            type="radio" 
                            id="TL0" name="TL" 
                            value="0" 
                            checked={formData.TL == 0} 
                            onChange={handleChange} 
                        />
                        <label htmlFor="TL0">0</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="TL1" 
                            name="TL" 
                            value="1"  
                            checked={formData.TL == 1}
                            onChange={handleChange}
                        />
                        <label htmlFor="TL1">1</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="TL2" 
                            name="TL" 
                            value="2" 
                            checked={formData.TL == 2} 
                            onChange={handleChange}
                        />
                        <label htmlFor="TL2">2</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="TL3" 
                            name="TL" 
                            value="3" 
                            checked={formData.TL == 3} 
                            onChange={handleChange}
                        />
                        <label htmlFor="TL3">3</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="TL4" 
                            name="TL" 
                            value="4" 
                            checked={formData.TL == 4} 
                            onChange={handleChange}
                        />
                        <label htmlFor="TL4">4</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="TL5" 
                            name="TL"
                            value="5" 
                            checked={formData.TL == 5} 
                            onChange={handleChange}
                        />
                        <label htmlFor="TL5">5</label>
                    </div>
                </div>

            {/* <input name="TL" id="TL" type="number" value={formData.TL} onChange={handleChange} /> */}

            <label htmlFor="cost">Cost:</label>
            <input name="cost" id="cost" type="number" value={formData.cost} onChange={handleChange} />

            <input type="submit" value={props.label}/>
        </form>
    )
}
export default Form