import React from 'react';
import './Modif.css'

const Modif = ({photo}) => {
    // const testValue = {nom:'Ndole', prix: '2500', photo:ndole, id:2}

    const structure = (
        <div>
            <div className="modifMeal">
                <div className="modifMealImage">
                    <img src={photo.photo} alt="meal" height="130" width="130" />
                </div>
                <div className="modifMealInfo">
                    <div><input type="text" id="nom" className="info" value={photo.nom} size="30" /></div>
                    <div><input type="text" id="prix" className="info" value={photo.prix} size="30" /></div>
                    <div><input id="btn" type="button" value="Enregistrer" /></div>
                </div>
            </div>
        </div>
    )

    // const photosList = photo.map(photos => {
    //     return(
    //         <div>
    //             <div className="modifMeal" key={photos.id}>
    //                 <div className="modifMealImage">
    //                     <img src={photos.image} alt="meal" height="130" width="130" />
    //                 </div>
    //                 <div className="modifMealInfo">
    //                     <div><input type="text" id="nom" className="info" placeholder="Nouveau nom" size="30" /></div>
    //                     <div><input type="text" id="prix" className="info" placeholder="Nouveau prix" size="30" /></div>
    //                     <div><input id="btn" type="button" value="Enregistrer" /></div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // })

    return(
        <div className="photos-list">
            {structure}
        </div>
    );
}

export default Modif;