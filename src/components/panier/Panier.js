import React, {Component} from 'react';
import Panier1 from './Panier1';
import logo from '../../assets/logo.png';

class Panier extends Component{
    data = {
        repas : [
            {image: <img src={logo} alt="img" height="30px" width="30px" />, nom: 'eru', prix: '1000Fcfa', id: 1},
            {image: <img src={logo} alt="img" height="30px" width="30px" />, nom: 'koki', prix: '800Fcfa', id: 2},
            {image: <img src={logo} alt="img" height="30px" width="30px" />, nom: 'ndole', prix: '15Fcfa', id: 3}
        ]
    }
    
    render(){

        return(
            <div className="Panier">
                <Panier1 repas={this.data.repas} />
            </div>
        );
    }
}
export default Panier;