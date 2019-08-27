import React, { Component} from 'react';
import './Navigation.css';
import logo from "../../assets/logo1.png";

class Nav extends Component{
    render(){
        return(
            <div className="navContainer" >
                <div className="logo">
                    <a href='https://google.com'><img src={logo} alt="logo" /></a>
                </div>

                <div className="links">
                    <ul>
                        <li className="navLink"><a href='https://google.com'>Voir Carte</a></li>
                        <li className="navLink"><a href='https://google.com'>Ajouter Repas</a></li>
                        <li className="navLink"><a href='https://google.com'>Parametres</a></li>
                        <li className="navLink"><a href='https://google.com'>Deconnexion</a></li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Nav;