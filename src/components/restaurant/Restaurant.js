import React from 'react'

const Restaurant=({restaurants, handle})=> {

    const RestauList = restaurants.map(restaurant=>{
        return(
            <div key={restaurant.id}>
                <div>
                    <img src={restaurant.restau} alt="RestauLogo" height="130" width="130" />
                </div>
                <div>
                    <div>{restaurant.name}</div>
                    <div>{restaurant.location}</div>
                    <div>
                        <form>
                            <input type="button" id="voireCarte" value="Voir Carte" onClick={()=>{handle(restaurant.id)}} />
                        </form>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
           {RestauList}
        </div>
    )
}

export default Restaurant