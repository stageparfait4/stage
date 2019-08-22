import React, { Component } from 'react';
import '../css/Connexion.css';
import LogoCenter from './LogoCenter';
import CompteClient from './CreerCompte';

class Connexion extends Component{
    state = {
        login: null,
        mdp: null,
        affiche: false
    }

    handleClick = (e) =>{
        this.setState({
            affiche:true
        })
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
        return this.state.affiche === true? (
            <div>
                <CompteClient />
            </div>
        ):(
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
                    <a id="creer" href = "#" onClick={this.handleClick}>creer un compte</a>
                </form>
            </div>
        )
    }
}
export default Connexion;