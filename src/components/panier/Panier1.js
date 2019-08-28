import React, { Component } from 'react';
import './Panier1.css'


class Panier1 extends Component{
    state = {value:''};

    handleChange(event) {
        this.setState({value:event.target.value});
    }

    handleSubmit(event) {
        console.log('votre ville favori est:' + this.state.value);
        event.preventDefault();
    }
    

    render(){
        const {repas} = this.props;
        const repaslist = repas.map(repa => {
            return(
                <div className="bodyRepas">
                <div className="pageComplete">
                    <div className="repa" key={repa.id}>
                        <div className="imageRepas">
                            {repa.image}
                        </div>

                        <div className="nomRepas">
                            {repa.nom}
                        </div>

                        <div className="prixRepas">
                            {repa.prix}
                        </div>

                        <div className="nombrePlat">
                            <input className="number" placeholder="Quantite" type="number"></input>
                        </div>

                        <div className="bouttonRetirer">
                            <input className="btnRetirerModif" type="button" value="Supprimer"/>
                        </div>
                    </div>
                </div>
                </div>
            )
        })

        return(
            <div className="repas-list">
                {/* {console.log(vadivde)} */}
                {repaslist}
                <div className="btnRepas">
                    <button value="Retour" type="submit"> Retour </button>
                    <button value="vider le panier" type="submit"> Vider </button>
                    <button value="Commander" type="submit" onCdivck={this.commandde}> Commander </button>
                </div>
            </div>
        );
    }
}
export default Panier1