import React, { Component } from 'react';
import '../css/CompteClient.css';

class Affiche extends Component {
    state = {
        Nom:null,
        Emmail: null,
        Numero: null,
        Password: null,
        Ville: null,
        Quartier: null
    }
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
        return (
            <div className = "initial"> 
                <div className="form-wrapper" >
                    <h1>Entrez vos coordonnees</h1>
                    <form onSubmit={this.handleSubmit} novalidate>
                        <div className="left">
                            <label htmlFor="Nom"></label>
                            <input type="text" placeholder="Nom" name="Nom" onChange={this.Change} novalidate/><br /><br />
                            
                            <label htmlFor="Numero"></label>
                            <input type="text" placeholder="Numero" name="Numero" onChange={this.Change} novalidate/><br />
                            
                            <label htmlFor="Ville" className="label">Ville</label><br />
                            <select name="Ville" value="armand">
                                <option value="Douala">Douala</option>
                                <option value="Yaounde">Yaounde</option>
                                <option value="Bafoussam">Bafoussam</option>              
                            </select><br/><br/><br/>
                        </div>

                        <div className="right">
                            <label htmlFor="Email"></label>
                            <input type="email" placeholder="Email" name="Email" onChange={this.Change} novalidate/><br /><br />

                            <label htmlFor="Password"></label>
                            <input type="password" placeholder="Mot de passe" name="Password" onChange={this.Change} novalidate/><br/>

                            <label htmlFor="Quatier" className="label">Quartier</label><br />
                            <select name="Quatier" value="Quartier">
                                <option value="elfe">elfe</option>
                                <option value="minboman">minboman</option>
                                <option value="camkop">camkop</option>
                            </select><br/><br/><br/>
                        </div>
                    </form>

                    <div className="Creer">
                            <button type="Submit"> Creer </button>
                    </div>

                </div>
            </div>
        )
    }
}
    export default Affiche;