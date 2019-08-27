import React from 'react';
import './DisplayCarte.css';
import Modification from '../modifierUnRepas/ModificationRepas'

const DispCarte = ({carte, delt, click, show, data})=>{

    const repasListe = carte.map(repas=>{
        return(
            <div key={repas.id}  className="dispRepas">
                <div className="mealImage">
                    <img className="mealImage" src={repas.photo} alt='logo' height="200" width="200"/>
                </div>

                <div className="meal">
                    <div className="mealData">
                        <div className="foodName">{repas.nom}</div>
                        <div className="price">{repas.prix} FCFA</div>
                    </div>

                    <div className="mealAction">
                        <button className="btn" onClick={()=>{click(repas.id)}} >MODIFIER</button>
                        <button className="btn" onClick={()=>{delt(repas.id)}}>RETIRER</button>
                    </div>
                </div>

            </div>
        )
    })

    return show===true?(
        <div className="overallLayout">
            <div>{repasListe}</div>
            <div className="modifyPane"><Modification mealData={data} /></div>
        </div>
    ):(
        <div>
            {repasListe}
        </div>
    )
}


export default DispCarte