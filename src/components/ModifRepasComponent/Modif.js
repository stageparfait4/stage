import React from 'react';
import './Modif.css'

const Modif = ({photo}) => {
    const photosList = photo.map(photos => {
        return(
            <div>
                <div className="modifMeal" key={photos.id}>
                    <div className="modifMealImage">
                        <img src={photos.image} alt="meal" height="200" width="200" />
                    </div>
                    <div className="modifMealInfo">
                        <div><input type="text" id="nom" className="info" placeholder="Nouveau nom" size="30" /></div>
                        <div><input type="text" id="prix" className="info" placeholder="Nouveau prix" size="30" /></div>
                        <div><input id="btn" type="button" value="Enregistrer" /></div>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className="photos-list">
            {photosList}
        </div>
    );
}

export default Modif;