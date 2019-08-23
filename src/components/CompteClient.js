import React, { Component } from 'react';
import '../css/creerCompte.css';
import Connexion from './Connexion';
import '../css/Connexion.css';
import ReactDOM from 'react-dom';
// import { tryStatement } from '@babel/types';

class Affiche extends Component {
    state = {
        Nom:null,
        Emmail: null,
        Numero: null,
        Password: null,
        Ville: null,
        Quartier: null,
        afficheClient: false
    }

    // handleClick = (e) =>{
    //     this.setState({
    //         afficheClient:true
    //     })
    //     // e.preventDefault();
    // }

    submit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    change = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(e.target.value)
    }

    function=(event) => {
        this.setState({option: event.target.value});
    }

    render() {
        return(
            <div className = "initial"> 
                <div className="form-wrapper" >
                    <h1>Entrez vos coordonnees</h1>
                    <form onSubmit={this.handleSubmit} novalidate>
                        <div className="left">
                            <input className = "inputCreer" type="text" placeholder="Nom" name="Nom" onChange={this.Change} novalidate/><br /><br />
                            
                            <input className = "inputCreer" type="text" placeholder="Numero" name="Numero" onChange={this.Change} novalidate/><br />
                            
                            <label htmlFor="Ville" className="labelCreer">Ville</label><br />
                            <select className="selectCreer" name="Ville" value="armand">
                                <option value="Douala">Douala</option>
                                <option value="Yaounde">Yaounde</option>
                                <option value="Bafoussam">Bafoussam</option>              
                            </select><br/><br/><br/>
                        </div>

                        <div className="right">
                            <input className = "inputCreer" type="email" placeholder="Email" name="Email" onChange={this.Change} novalidate/><br /><br />

                            <input className = "inputCreer" type="password" placeholder="Mot de passe" name="Password" onChange={this.Change} novalidate/><br/>

                            <label htmlFor="Quatier" className="labelCreer">Quartier</label><br />
                            <select className="selectCreer" name="Quatier" value="Quartier">
                                <option value="elfe">elfe</option>
                                <option value="minboman">minboman</option>
                                <option value="camkop">camkop</option>
                            </select><br/><br/><br/>
                        </div>
                    </form>
                    <div >
                        <button className="buttonCreer" type="Submit"> Creer </button><br/>
                        <a id="creer" href = "/">Se connecter</a>
                    </div>
                </div>
            </div>
        )
    }
}
    export default Affiche;