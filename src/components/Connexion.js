import React, { Component } from 'react';
import '../css/Connexion.css';
import LogoCenter from './LogoCenter';

class Connexion extends Component{
    state = {
        login: null,
        mdp: null
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
        return(
            <div className = "page">
            <LogoCenter />
                <p>
                    Connectez-vous pour de meilleurs decouvertes
                </p>
                <br/>

                <form className = "info-Page1" onSubmit={this.handleSubmit}>

                    <label for='login'> </label>
                    <input type = 'text' id = 'login' placeholder = "Entrez votre login" size="40" onChange={this.handleChange} />
                    <br/><br/>
                    <label for='mdp'></label>
                    <input type = 'password' id = 'mdp' placeholder = "Entrez votre mot de passe" size="40" onChange={this.handleChange} />
                    <br/><br/>
                    <button id="connect" size="15">Connexion</button>
                    <br/>
                    <a id="creer" href = "/creercompte">creer un compte</a>
                </form>
            </div>
        )
    }
}
export default Connexion;