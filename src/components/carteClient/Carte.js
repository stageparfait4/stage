import React, { Component } from 'react'
import Meals from '../meals/Meals'

class Carte extends Component {

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
        ],
        choosenCarte:{},
    }

    findRestoMeals=(restoId)=>{
        return(
            this.state.carte.find(menu=>{
                return menu.restoId === restoId
            })
        )
    }



    render() {
        return (
            <div>
                <Meals carte={this.findRestoMeals(this.props.restoId)} />
            </div>
        )
    }
}

export default Carte