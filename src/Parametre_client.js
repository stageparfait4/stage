import React, {Component} from 'react';
import "./Parametre_client.css";
import logo from './logo.png';

class Parametre_client extends Component {

    render() {
        return (
            <div id="central">
                <div id="hello">
                <div className="logo">
                        <img src={logo} className="Parametre_client_logo" alt="logo"/>
                </div>
                <div className="wrapper">
                    
                    <div id="whole">
                        <div className="password">
                                <h1>Mot de passe</h1>
                            <form onSubmit={this.handleSubmit} novalidate>
                                
                            <div className="Ancient">
                                <label htmlFor="Ancient"> Ancient </label>
                                <input type="password" onKeyUp="this.value=''" className="" placeholder="Ancient" type="password" name="Ancient" bnovalidate onChange={this.handleChange} />
                            </div>

                            <div className="Nouveau">
                                <label htmlFor="Nouveau"> Nouveau</label>
                                <input type="password" className="" placeholder="Nouveau" type="password" name="Nouveau" bnovalidate onChange={this.handleChange} />
                            </div>

                            <div className="Enregistrer">
                                <button type="text">Enregistrer</button>
                            </div>
                            </form>             
                        </div>
                    </div>

                    <div id="bjr">
                    <div className="localisation">
                                <h2> localisation </h2>
                                <form onSubmit={this.handleSubmit} novalidate>
                                        
                                    <div className="Ville">
                                        <label htmlFor="Ville">Ville</label>
                                        <select name="Ville" value="armand">
                                            <option value="Douala">Douala</option>
                                            <option value="Yaounde">Yaounde</option>
                                            <option value="Bafoussam">Bafoussam</option>              
                                        </select>
                                    </div>

                                    <div className="Quartier">
                                        <label htmlFor="Quatier">Quartier</label>
                                        <select name="Quatier" value="Quartier">
                                            <option value="elfe">elfe</option>
                                            <option value="minboman">minboman</option>
                                            <option value="camkop">camkop</option>
                                        </select>
                                    </div>

                                    <div className="Valider">
                                        <button type="text">Valider</button>
                                    </div>
                                </form>

                            </div>
                    </div>
                </div> 

                <div className="suppression">
                    <form onSubmit={this.handleSubmit} novalidate>

                        <div className="Supprimer ">
                            <button type="text">Supprimer votre Compte</button>
                        </div>
                    </form>

                    </div>
                </div>            
            </div>
        )
    }
}
export default Parametre_client;