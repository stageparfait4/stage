import React, {Component} from "react";
import './choixTypeCompte.css';
import AfficheForm from '../compteResto/AfficheForm'
import Affiche from '../creationPageClient/CompteClient'

class ChoixTypeCompte extends Component { 
    constructor(props){
        super(props);
        this.state = {
            afficheQui: "rien"
        };
    }


    displayScreen = (e) => {
        console.log(e.target.id)
        e.target.id === "client"?
        (this.setState({
            afficheQui: "client"
        }))
        :(this.setState({
            afficheQui: "resto"
        }));
        console.log(this.state.afficheQui)
    }

    submit =(e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        if(this.state.afficheQui === "rien"){
                return( 
                        <div className="initial"><br/>
                            <form onSubmit={this.submit} className="formInitial">
                                <div className="radioButtons">
                                    <div className="Restaurant">
                                        <label htmlFor="accountChoice">Restaurant</label>
                                        <input type="radio" name='accountChoice' className="accountChoice" id="res" onClick={this.displayScreen}/>
                                    </div>

                                    <div className="Client">
                                        <label htmlFor="client">Client</label>
                                        <input type="radio" name='accountChoice' className="accountChoice" id="client" onClick={this.displayScreen}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                )
        }else if(this.state.afficheQui === "client"){
            return(
                <div className="initial"><br/>
                    <form onSubmit={this.submit} className="formInitial">
                        <div className="radioButtons">
                            <div className="Restaurant">
                                <label htmlFor="accountChoice">Restaurant</label>
                                <input type="radio" name='accountChoice' className="accountChoice" id="res" onClick={this.displayScreen}/>
                            </div>

                            <div className="Client">
                                <label htmlFor="client">Client</label>
                                <input type="radio" name='accountChoice' className="accountChoice" id="client" checked="true" onClick={this.displayScreen}/>
                            </div>
                        </div>
                    </form>
                    <Affiche />
                </div>
            )
        }else{
            return(
                <div className="initial"><br/>
                    <form onSubmit={this.submit} className="formInitial">
                        <div className="radioButtons">
                            <div className="Restaurant">
                                <label htmlFor="accountChoice">Restaurant</label>
                                <input type="radio" name='accountChoice' className="accountChoice" id="res" checked="true"onClick={this.displayScreen}/>
                            </div>

                            <div className="Client">
                                <label htmlFor="client">Client</label>
                                <input type="radio" name='accountChoice' className="accountChoice" id="client" onClick={this.displayScreen}/>
                            </div>
                        </div>
                    </form>
                    <AfficheForm />
                </div>
            )
        }
    }
}

export default ChoixTypeCompte;
