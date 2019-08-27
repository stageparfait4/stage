import React, { Component } from 'react';
import DispCarte from '../displayCarte/DisplayCarte';
import Nav from '../navigation/Navigation';
import './RestoCarte.css';
import logo from "../../assets/logo.png";
import ndole from "../../assets/ndole.jpg";
import eru from "../../assets/eru.jpg";
import koki from "../../assets/koki.jpg";
import banana from "../../assets/banana.jpg";
import koki2 from "../../assets/koki2.jpg";
import plantain from "../../assets/dryplanti.jpg";
import image from "../../assets/images.jpg";

class RestoCarte extends Component{
    state = {
        repas: [
            {nom:'Eru', prix: '2000', photo:logo, id:1},
            {nom:'Ndole', prix: '2500', photo:ndole, id:2},
            {nom:'Koki', prix: '1000', photo:eru, id:3},
            {nom:'Eru', prix: '2000', photo:koki, id:1},
            {nom:'Ndole', prix: '2500', photo:banana, id:2},
            {nom:'Koki', prix: '1000', photo:koki2, id:3},
            {nom:'Eru', prix: '2000', photo:plantain, id:1},
            {nom:'Ndole', prix: '2500', photo:image, id:2}
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
            <div id='overallCarte'>
                <Nav />
                <div className="restoCarte">
                    <DispCarte carte={this.state.repas} delt={this.delRepas} />
                    <button id='addMeal'>Ajouter un nouveau repas</button>
                </div>
            </div>
        )
    }
}

export default RestoCarte;