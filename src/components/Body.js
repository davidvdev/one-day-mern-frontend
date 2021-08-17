import React from 'react'

const Body = (props) => {
    const {weapons} = props

    const loading = () => <h4>Loading Items... This may take a few seconds</h4>

    const loaded = () => {
        return(
            <div className="body">
                {weapons.map(weapon => (
                    <article key={weapon._id}>
                        <div className="identifier">
                            <h2>{weapon.name}</h2>
                            <img src=
                                {weapon.type === "melee"
                                    ? "stiletto.svg"
                                    : "ray-gun.svg"
                                }
                                alt={weapon.name}
                            />
                        </div>
                        <div className="stats">
                            <h3>Stats</h3>
                            <ul>
                                <li>Type: {weapon.type}</li>
                                <li>Attribute: {weapon.attribute}</li>
                                <li>Damage: {weapon.damage}</li>
                                {weapon.type === "melee" ? 
                                    <li>Shock: {weapon.shock}</li>
                                    : <><li>Range: {weapon.range}</li><li>Magazine: {weapon.magazine}</li></>}
                                <li>Encumberance: {weapon.encumberance}</li>
                                <li>Tech Level: {weapon.TL}</li>
                                <li>Cost: {weapon.cost}</li>
                            </ul>
                        </div>
                        <div className="description">
                            <p>{weapon.description}</p>
                        </div>
                        <div className="options">
                            <button
                                onClick={() => {
                                    props.variantWeapon(weapon)
                                    props.history.push("/create")
                                }}
                            >Create Variant</button>
                            <button
                                onClick={() => {
                                    props.selectWeapon(weapon)
                                    props.history.push("/edit")
                                    }}
                            >Edit Item</button>
                            <button
                                onClick={() => {
                                    props.deleteWeapon(weapon)
                                }}
                            >Delete Item</button>
                        </div>
                    </article>
                ))}
            </div>
        )
    }
    return weapons.length > 0 ? loaded() : loading();
}

export default Body