import React, {Component} from "react";
import Affiche from './CompteClient';
import "../css/CompteClient.css";
import LogoCenter from "./LogoCenter"


class CompteClient extends Component { 
    constructor(props){
        super(props);
        this.state = { Nom: false};
    }
    init = (e) => {
            console.log(e.target.id)
            return e.target.id === "client"? (<Affiche />): null;
    }
    displayScreen = (e) => {
        return e.target.id === "client"? (this.setState({
            Nom: true
        })):(this.setState({
            Nom: false
        }));
    }
    submit =(e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return this.state.Nom === true? (
            <div>
                <LogoCenter/>
                <form onSubmit={this.submit}>
                    <label htmlFor="resto">Restaurant</label>
                    <input type="radio" name='choice'id="res" onClick={this.displayScreen}/>

                    <label htmlFor="client">client</label>
                    <input type="radio" name='choise'id="client" checked="true" onClick={this.displayScreen}/>
                </form><br/>
                <Affiche sow={this.displayScreen}/>
            </div>
        ):(
            <div id="initial">
            <LogoCenter/>
                <form onSubmit={this.submit}>
                    <label htmlFor="restaurant">Restaurant</label>
                    <input type="radio" name='choice'id="res" onClick={this.displayScreen}/>
                    <label htmlFor="client">client</label>
                    <input type="radio" name='choise'id="client" onClick={this.displayScreen}/>
                </form>
            </div>
        );
        }
    }
    export default CompteClient;
