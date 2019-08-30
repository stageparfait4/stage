import React from 'react'

const Meals=({carte})=>{

    const mealList = carte.repas.map(Meals=>{
        return(
            <div key={Meals.id}>
                {Meals.nom}
                {Meals.prix}
            </div>
        )
    })

    return (
        <div>
            {
                console.log(carte)
            }
            {mealList}
        </div>
    )
}

export default Meals