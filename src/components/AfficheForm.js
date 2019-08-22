import React, { Component } from 'react';
import './Resto.css';

class Affiche extends Component{
    state={
        Nom_restaurant:null,
        Nom_Proprietaire: null,
        Email: null,
        mot_de_passe: null,
        localisation: null,
        heure_ouverture: null,
        heure_fermeture: null,
        Quartier: null,
        ville : null,
        numero: null

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
    render(){
        return(
        <div id = "ens">
            <h1>Entrez voz coordonnees</h1>
            <form  onSubmit={this.submit}>
                <div id= "gauche">
                    <input type="text" placeholder="Nom du restaurant" id="Nom" onChange={this.change}/><br/> <br/>
                    <input type="text" placeholder="Email" id="Email" maxlength="40" onChange={this.change}/><br/><br/>
                    <input type="text" placeholder="localisation" id="localisation"onChange={this.change} /><br/><br/>
                    <label htmlFor="quartier" className="forme">   Quartier :   </label> <br/>
                    <select name="quartier" onChange={this.function} value={this.state.value} >
                        <option value="bonaberie"  onChange={this.add}> Bonaberie</option>
                        <option value="lokpon"  onChange={this.add}> Lokpon</option>
                        <option value="village"  onChange={this.add}> Village</option>
                        <option value="cicam" onChange={this.add} > Cicam</option>
                    </select><br/><br/>
                    <label htmlFor="heure ouverture" className="forme">heure ouverture :  </label><br/>
                    <input type="time" placeholder="heure ouverture" id="heure ouverture" className="heure" onChange={this.change}/><br/><br/>
                    
                </div>

                <div id="droite">
                    <input type="text" placeholder="Nom du Proprietaire" id="Proprietaire" onChange={this.change}/><br/><br/>
                    <input type="password" placeholder="mot de passe" id="mot de passe" onChange={this.change}/><br/><br/>
                    <input type="text" placeholder="numero du proprietaire" id="numero" onChange={this.change}/><br/><br/>
                    <label htmlFor="ville" className="forme">Ville :  </label><br/>
                    <select name="ville" value="Yello" >
                        <option value="baf"> Bafoussam</option>
                        <option value="dla"> Douala</option>
                        <option value="yde"> Yaounde</option>
                        <option value="bmda"> Bamenda</option>
                    </select><br/><br/>
                    <label htmlFor="heure fermeture" className="forme">heure fermeture :  </label><br/>
                    <input type="time" placeholder="heure fermeture" id="heure fermeture" className="heure" onChange={this.change} /><br/><br/>
                </div>
                <button>Creer</button>
            </form>
        </div>
    )}
    
}

export default Affiche;