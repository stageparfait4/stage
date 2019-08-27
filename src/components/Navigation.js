import React, { Component} from 'react';
import '../css/Navigation.css';
import logo from "../assets/logo1.png";

class Nav extends Component{
    render(){
        return(
            <div className="container" >
                <ul className="navLinks">
                    <li><a href='https://google.com'><img src={logo} alt="logo" /></a></li>
                    <li><a className="navLink" href='https://google.com'>Voir Carte</a></li>
                    <li><a className="navLink" href='https://google.com'>Ajouter Repas</a></li>
                    <li><a className="navLink" href='https://google.com'>Parametres</a></li>
                    <li><a className="navLink" href='https://google.com'>Deconnexion</a></li>
                </ul>
            </div>
        )
    }
}

export default Nav;