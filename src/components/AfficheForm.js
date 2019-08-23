import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RestoCarte from './RestoCarte';

class CompteResto extends Component{
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
        numero: null,
        afficheResto: false

    }
    submit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleClick = (e) =>{
        this.setState({
            afficheResto:true
        })
        // e.preventDefault();
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
        return this.state.afficheResto===false?(
        <div className = "form-wrapper">
            <h1>Entrez vos coordonnees</h1>
            <form  onSubmit={this.submit}>
                <div className= "left">
                    <input className="inputCreer" type="text" placeholder="Nom du restaurant" id="Nom" onChange={this.change}/><br/> <br/>
                    <input className="inputCreer" type="text" placeholder="Email" id="Email" maxlength="40" onChange={this.change}/><br/><br/>
                    <input className="inputCreer" type="text" placeholder="localisation" id="localisation"onChange={this.change} /><br/>
                    <label htmlFor="quartier" className="labelCreer">   Quartier :   </label> <br/>
                    <select className="selectCreer" name="quartier" onChange={this.function} value={this.state.value} >
                        <option value="bonaberie"  onChange={this.add}> Bonaberie</option>
                        <option value="lokpon"  onChange={this.add}> Lokpon</option>
                        <option value="village"  onChange={this.add}> Village</option>
                        <option value="cicam" onChange={this.add} > Cicam</option>
                    </select><br/><br/>
                    <label htmlFor="heure ouverture" className="labelCreer">heure ouverture :  </label><br/>
                    <input type="time" id="heure ouverture" className="heure" onChange={this.change}/><br/><br/>
                    
                </div>

                <div className="right">
                    <input className="inputCreer" type="text" placeholder="Nom du Proprietaire" id="Proprietaire" onChange={this.change}/><br/><br/>
                    <input className="inputCreer" type="password" placeholder="mot de passe" id="mot de passe" onChange={this.change}/><br/><br/>
                    <input className="inputCreer" type="text" placeholder="numero du proprietaire" id="numero" onChange={this.change}/><br/>
                    <label htmlFor="ville" className="labelCreer">Ville :  </label><br/>
                    <select className="selectCreer" name="ville" value="Yello" >
                        <option value="baf"> Bafoussam</option>
                        <option value="dla"> Douala</option>
                        <option value="yde"> Yaounde</option>
                        <option value="bmda"> Bamenda</option>
                    </select><br/><br/>
                    <label htmlFor="heure fermeture" className="labelCreer">heure fermeture :  </label><br/>
                    <input type="time" id="heure fermeture" className="heure" onChange={this.change} /><br/><br/>
                </div>
            </form>
            <div>
                <button className="buttonCreer" onClick={this.handleClick}>Creer</button><br />
                <a id="creer" href = "/">Se connecter</a>
            </div>
        </div>
    ):(
        <RestoCarte />
    )}
}

export default CompteResto;