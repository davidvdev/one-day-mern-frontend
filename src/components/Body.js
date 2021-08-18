import React from 'react'

const Body = (props) => {
    const {weapons} = props

    const loading = () => <h4 className="loading">Loading Items... This may take a few seconds</h4>

    const weaponIcon = (weapon) => {
        switch(weapon.TL){
            case 0:
                switch (weapon.type) {
                    case "melee": 
                        return "img/tl-0-melee.svg"
                    case "heavy": 
                        return "img/tl-0-heavy.svg"
                    default:
                        return "img/tl-0-ranged.svg"
                }
            case 1:
                switch (weapon.type) {
                    case "melee": 
                        return "img/tl-1-melee.svg"
                    case "heavy": 
                        return "img/tl-1-heavy.svg"
                    default: 
                        return "img/tl-1-ranged.svg"
                }
            case 2:
                switch (weapon.type) {
                    case "melee": 
                        return "img/tl-2-melee.svg"
                    case "heavy": 
                        return "img/tl-2-heavy.svg"
                    default: 
                        return "img/tl-2-ranged.svg"
                }
            case 3:
                switch (weapon.type) {
                    case "melee": 
                        return "img/tl-3-melee.svg"
                    case "heavy": 
                        return "img/tl-3-heavy.svg"
                    default: 
                        return "img/tl-3-ranged.svg"
                }
            case 4:
                switch (weapon.type) {
                    case "melee": 
                        return "img/tl-4-melee.svg"
                    case "heavy": 
                        return "img/tl-4-heavy.svg"
                    default: 
                        return "img/tl-4-ranged.svg"
                }
            case 5:
                switch (weapon.type) {
                    case "melee": 
                        return "img/tl-5-melee.svg"
                    case "heavy": 
                        return "img/tl-5-heavy.svg"
                    default:
                        return "img/tl-5-ranged.svg"
                }
            default:
                return "img/default.svg"
        }
    }

    const loaded = () => {
        return(
            <>
                {weapons.map(weapon => (
                    <article key={weapon._id}>
                        <div className="card-top">
                            <div className="identifier">
                                <h2>{weapon.name}</h2>
                                <img src={weaponIcon(weapon)}
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