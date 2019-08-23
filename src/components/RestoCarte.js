import React, { Component } from 'react';
import DispCarte from './DisplayCarte';
import Nav from './Navigation';
import '../css/RestoCarte.css';
import logo from "../assets/logo.png";

class RestoCarte extends Component{
    state = {
        repas: [
            {nom:'Eru', prix: '2000 fr', photo:logo, id:1},
            {nom:'Ndole', prix: '2500', photo:logo, id:2},
            {nom:'Koki', prix: '1000', photo:logo, id:3}
        ]
    }

    delRepas = (id) =>{
        let newList = this.state.repas.filter(elements=>{
            return elements.id !== id
        });
        
        this.setState({
            repas: newList
        })
    }

    render(){
        return(
            <div id='test'>
                <div><Nav />
                    <DispCarte carte={this.state.repas} delt={this.delRepas} />
                    <button id='right'>Ajouter un nouveau repas</button>
                </div>
            </div>
        )
    }
}

export default RestoCarte;