import React, { Component } from 'react';
import './connect.css';
import LogoCenter from '../logo/LogoCenter';
import ChoixTypeCompte from '../typeCompte/ChoixTypeCompte'
import RestoCarte from '../restoCarte/RestoCarte'

class Connexion extends Component{
    state = {
        login: null,
        mdp: null,
        afficheQui: "rien"
    }

    handleClick = (e) =>{
        (e.target.id === "connexion")? (this.setState({afficheQui:"connexion"})):(this.setState({afficheQui:"creerCompte"}))
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        if(this.state.afficheQui==="creerCompte"){
            <div>
                <ChoixTypeCompte />
            </div>
        }else if(this.state.afficheQui==="connexion"){
            <div><RestoCarte /></div>
        }
        else{
            <div className="imageFont">    
                <div className="logoConnexion"> <LogoCenter /></div>
                <div className="titleConnexion"><p>Connectez-vous pour de meilleurs decouvertes</p></div>
                <div className = "pageConnexion">
                    <form onSubmit={this.handleSubmit}>
                        <div className="connectezVs">
                            <input className="loginInput" type = 'text' id = 'login' placeholder = "E-mail" size="40" onChange={this.handleChange} />
                            <input className="loginInput" type = 'password' id = 'mdp' placeholder = "Mot de passe" size="40" onChange={this.handleChange} />
                        </div>

                        <div className="bouttonConnect">
                            <div><button className="connect" href="#" id="connexion" size="15"onClick={this.handleClick}>Connexion</button></div>
                            <div><a id="creerCompte" href = "#" onClick={this.handleClick}>creer un compte</a></div>
                        </div>

                    </form>
                </div>
            </div>
        }
    }
}

export default Connexion;