import React from 'react'

const Body = (props) => {
    const {weapons} = props

    const loading = () => <h4>Loading Items... This may take a few seconds</h4>

    const loaded = () => {
        return(
            <>
                {weapons.map(weapon => (
                    <article key={weapon._id}>
                        <div className="card-top">
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
                                    <li><span>Type:</span> <span>{weapon.type}</span></li>
                                    <li><span>Attribute:</span> <span>{weapon.attribute}</span></li>
                                    <li><span>Damage:</span> <span>{weapon.damage}</span></li>
                                    {weapon.type === "melee" ? 
                                        <li><span>Shock:</span> <span>{weapon.shock}</span></li>
                                        : <><li><span>Range:</span> <span>{weapon.range}</span></li><li><span>Magazine:</span> <span>{weapon.magazine}</span></li></>}
                                    <li><span>Encumberance:</span> <span>{weapon.encumberance}</span></li>
                                    <li><span>Tech Level:</span> <span>{weapon.TL}</span></li>
                                    <li><span>Cost:</span> <span>{weapon.cost}</span></li>
                                </ul>
                            </div>
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
            </>
        )
    }
    return weapons.length > 0 ? loaded() : loading();
}

export default Body