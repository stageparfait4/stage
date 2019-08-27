import React, { Component } from 'react';
// import Connexion from './Connexion';
import './compteClient.css';
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
            <div>
                <div className="title">
                <h1>VEUILLEZ ENTRER VOS COORDONNEES</h1>
                </div>
                <form onSubmit={this.handleSubmit} novalidate>
                    <div className="form-wrapper" >
                        <div className="leftColumn">
                            <input className = "inputCreer" type="text" placeholder="Nom" name="Nom" onChange={this.Change} novalidate/>
                            
                            <input className = "inputCreer" type="text" placeholder="Numero" name="Numero" onChange={this.Change} novalidate/>
                            
                            <input className = "inputCreer" type="email" placeholder="Email" name="Email" onChange={this.Change} novalidate/>

                            <input className = "inputCreer" type="password" placeholder="Mot de passe" name="Password" onChange={this.Change} novalidate/>

                            <label htmlFor="Ville" className="labelCreer">Ville</label>
                            <select className="selectCreer" name="Ville" value="armand">
                                <option value="" disabled selected> Ville </option>
                                <option value="Douala">Douala</option>
                                <option value="Yaounde">Yaounde</option>
                                <option value="Bafoussam">Bafoussam</option>              
                            </select>

                            <label htmlFor="Quatier" className="labelCreer">Quartier</label>
                            <select className="selectCreer" name="Quatier" value="Quartier">
                                <option value="" disabled selected> Quartier </option>
                                <option value="elfe">elfe</option>
                                <option value="minboman">minboman</option>
                                <option value="camkop">camkop</option>
                            </select>
                            <div className="buttonsClient">
                                <div >
                                    <button className="buttonCreerClient" href = "/"> Creer </button>
                                </div>

                                <div>
                                <a id="connet" href = "/">Se connecter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
    export default Affiche;