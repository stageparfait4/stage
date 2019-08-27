import React from 'react';
import '../css/DisplayCarte.css';

const DispCarte = ({carte, delt})=>{
    return(
        <div>
            {
                carte.map(repas=>{
                    return(
                        <div key={repas.id}  className='dispRepas'id="menu">
                            <ul key={repas.id} >
                                    <li id='img'><img src={repas.photo} alt='logo' /></li>
                                    <li>
                                        { repas.nom } ........... 
                                       { repas.prix }
                                    </li>
                                    <li className="verticalMiddle">
                                        <button id="btn">MODIFIER</button>
                                        <button id="btn" onClick={()=>{delt(repas.id)}}>RETIRER </button>
                                    </li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default DispCarte