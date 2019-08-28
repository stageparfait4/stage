import React, { Component} from 'react';
import './Navigation.css';
// import {} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

class Nav extends Component{
    render(){
        return(
            <div className="links">
                <ul>
                    <li className="navLink"><NavLink to='/restoCarte'>Voir Carte</NavLink></li>
                    <li className="navLink"><NavLink to='https://google.com'>Ajouter Repas</NavLink></li>
                    <li className="navLink"><NavLink to='https://google.com'>Parametres</NavLink></li>
                    <li className="navLink"><NavLink to='/connexion'>Deconnexion</NavLink></li>
                    <li className="navLink"><NavLink to='/DemoPage'>Demos</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Nav;