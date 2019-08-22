import React, {Component} from "react";
import Affiche from './CompteClient';
import logo from '../assets/logo.png';
import '../css/creerCompte.css'
import CompteResto from './AfficheForm'


class CreerCompte extends Component { 
    constructor(props){
        super(props);
        this.state = {
            afficheQui: "rien"
        };
    }

    init = (e) => {
           // console.log(e.target.id)
            return e.target.id === "client"? (<Affiche />): null;
    }

    displayScreen = (e) => {
        console.log(e.target.id)
        e.target.id == "client"?
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
                <div className="red">
                    <img src={logo} alt="logo" height="100px" width="96px" /><br/>
                    <div className="initial"><br/>
                        <form onSubmit={this.submit} className="formInitial">
                            <label htmlFor="accountChoice">Restaurant</label>
                            <input type="radio" name='accountChoice'id="res" onClick={this.displayScreen}/>

                            <label htmlFor="client">client</label>
                            <input type="radio" name='accountChoice'id="client" onClick={this.displayScreen}/>
                        </form>
                    </div>
                </div>
            )
        }else if(this.state.afficheQui === "client"){
            return(
                <div className="red">
                    <img src={logo} alt="logo" height="100px" width="96px" /><br/>
                    <div className="initial"><br/>
                        <form onSubmit={this.submit} className="formInitial">
                            <label htmlFor="accountChoice">Restaurant</label>
                            <input type="radio" name='accountChoice'id="res" onClick={this.displayScreen}/>
    
                            <label htmlFor="client">client</label>
                            <input type="radio" name='accountChoice'id="client" checked="true" onClick={this.displayScreen}/>
                        </form><br/>
                        <Affiche sow={this.displayScreen}/>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="red">
                    <img src={logo} alt="logo" height="100px" width="96px" /><br/>
                    <div className="initial"><br />
                        <form onSubmit={this.submit} className ="formInitial">
                            <label htmlFor="accountChoice">Restaurant</label>
                            <input type="radio" name='accountChoice' id="res" onClick={this.displayScreen}/>
                            <label htmlFor="client">client</label>
                            <input type="radio" name='accountChoice' id="client" onClick={this.displayScreen}/>
                        </form><br />
                        <CompteResto />
                    </div>
                </div>
            )
        }
    }
}

export default CreerCompte;
