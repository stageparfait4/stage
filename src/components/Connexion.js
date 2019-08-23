import React, { Component } from 'react';
import '../css/Connexion.css';
import LogoCenter from './LogoCenter';
import CreerCompte from './CreerCompte';

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
        // e.preventDefault()
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
                <CreerCompte />
            </div>
        ):(
            <div className = "page">
            <LogoCenter />
                <p>
                    Connectez-vous pour de meilleurs decouvertes
                </p>
                <br/>

                <form className = "info-Page1" onSubmit={this.handleSubmit}>

                    <label htmlFor='login'> </label>
                    <input type = 'text' id = 'login' placeholder = "Entrez votre login" size="40" onChange={this.handleChange} />
                    <br/><br/>
                    <label htmlFor='mdp'></label>
                    <input type = 'password' id = 'mdp' placeholder = "Entrez votre mot de passe" size="40" onChange={this.handleChange} />
                    <br/><br/>
                    <button id="connect" size="15">Connexion</button>
                    <br/>
                    <button id="creer" href = "#" onClick={this.handleClick}>creer un compte</button>
                </form>
            </div>
        )
    }
}

export default Connexion;