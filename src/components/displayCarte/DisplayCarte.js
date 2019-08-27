import React from 'react';
import './DisplayCarte.css';

const DispCarte = ({carte, delt})=>{
    return(
        <div>
            {
                carte.map(repas=>{
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
                                    <button className="btn">MODIFIER</button>
                                    <button className="btn" onClick={()=>{delt(repas.id)}}>RETIRER</button>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}


export default DispCarte