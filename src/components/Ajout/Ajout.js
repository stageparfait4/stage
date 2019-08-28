import React, { Component } from './node_modules/react';
import AjouterRepas from '../AjouterRepas/AjouterRepas';
import logo from '../../assets/ndole.jpg'
import './ajout.css'
// import './Modif.css';

class Ajout extends Component{
    state = {
        photo : [
            {image:logo, id: 1}
        ]
    }
    render(){
        return(
            <div className = "page">
                <AjouterRepas photo={this.state.photo}/>
            </div>
        )
    }
}
export default Ajout;