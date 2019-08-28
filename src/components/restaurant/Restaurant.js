import React from 'react'
import { classImplements } from '@babel/types';
import './singleRestaurant.css'


const Restaurant=({data, click})=> {
    return (
        <div>
            {
                data.map(restaurant=>
                    (
                            <div key={restaurant.id}  className="eachRestaurant">
                            <div className="restauLogo">
                                <img src={restaurant.restau} alt='Restaurant logo' height="130" width="130" />
                            </div>
                            <div className="restauData">
                                <div className="restauName">{restaurant.name}</div>
                                <div className="restauLoc">{restaurant.location}</div>
                                <div className="restauBtn">
                                    <input type="button" id="voirCarte" value="Voir Carte" onClick={()=>{click(restaurant.id)}} />
                                </div>
                            </div>

                        </div>
                    )
                )
            }
        </div>
    )
}

export default Restaurant