import React, { Component } from 'react';
import './afficheForm.css';

class AfficheForm extends Component{
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
        <div>
            <form  onSubmit={this.submit}>
                <div className="informations">
                <h1>VEUILLEZ ENTRER VOS COORDONNEES</h1>
                </div>
            <div className = "container">
               <div className= "firstColumn">
                    <input className = "inputCreer"type="text" placeholder="Nom du restaurant" id="Nom" onChange={this.change}/>
                    <input className = "inputCreer"type="text" placeholder="Email" id="Email" maxlength="40" onChange={this.change}/>
                    <input className = "inputCreer"type="text" placeholder="localisation" id="localisation"onChange={this.change} />
                    <label htmlFor="quartier" className="forme">   Quartier :   </label> 
                    <select className="selectCreer" name="quartier" onChange={this.function} value={this.state.value} >
                        <option value="bonaberie"  onChange={this.add}> Bonaberie</option>
                        <option value="lokpon"  onChange={this.add}> Lokpon</option>
                        <option value="village"  onChange={this.add}> Village</option>
                        <option value="cicam" onChange={this.add} > Cicam</option>
                    </select>
                    <label htmlFor="heure ouverture" className="forme">heure ouverture :  </label>
                    <input className = "inputCreer"type="time" placeholder="heure ouverture" id="heure ouverture" onChange={this.change}/>
                    
                </div>

                <div className="secColumn">
                    <input className = "inputCreer"type="text" placeholder="Nom du Proprietaire" id="Proprietaire" onChange={this.change}/>
                    <input className = "inputCreer"type="password" placeholder="mot de passe" id="mot de passe" onChange={this.change}/>
                    <input className = "inputCreer"type="text" placeholder="numero du proprietaire" id="numero" onChange={this.change}/>
                    <label htmlFor="ville" className="forme">Ville : </label>
                    <select className="selectCreer" name="ville" value="Yello" >
                        <option value="baf"> Bafoussam</option>
                        <option value="dla"> Douala</option>
                        <option value="yde"> Yaounde</option>
                        <option value="bmda"> Bamenda</option>
                    </select>
                    <label htmlFor="heure fermeture" className="forme">heure fermeture :  </label>
                    <input type="time" placeholder="heure fermeture" id="heure fermeture" className = "inputCreer" onChange={this.change} />
                </div>
                <div className="buttons">
                    <button className="buttonCreerClient" href = "/">Creer</button>
                </div>
            </div>
            </form>
        </div>
    )}
    
}

export default AfficheForm;