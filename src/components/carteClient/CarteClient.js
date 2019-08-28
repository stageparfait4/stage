import React, { Component } from 'react';

class Carte extends Component{
    state={
        carte:[
            {restoId:1, repas: [
                {nom:'Eru', prix: '2000 fr', id:1},
                {nom:'Ndole', prix: '2500', id:2},
                {nom:'Koki', prix: '1000', id:3}
            ]},
            {restoId:2, repas: [
                {nom:'plantain', prix: '2000 fr', id:1},
                {nom:'corner', prix: '2500', id:2},
                {nom:'giving', prix: '1000', id:3}
            ]}
        ]
    }

    cartes={}

    chooseCarte=(idresto)=>{
        this.cartes = this.state.carte.find(restoCarte => {
            return restoCarte.restoId === idresto
        })

        console.log(this.cartes.repas)
    }

    render(){
        return(
            <div>
                <form>
                    <input type="button" onClick={this.chooseCarte(this.props.restoId)} value="Test Me" />
                </form>

                {
                    this.cartes.repas.map(listeRepas=>{
                        return(
                            <div key={listeRepas.id}>
                                {listeRepas.nom}
                                {listeRepas.prix}
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

export default Carte;