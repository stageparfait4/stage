import React, { Component } from 'react';
import './connect.css';
import LogoCenter from '../logo/LogoCenter';
import ChoixTypeCompte from '../typeCompte/ChoixTypeCompte'
import RestoCarte from '../restoCarte/RestoCarte'
import Header from '../hearder/header'
import {BrowserRouter, Link} from 'react-router-dom'

class Connexion extends Component{
    state = {
        users:[
            {email:"ltchakoumi@outlook.com", pwd:"lorrain", id:1, type:"client"},
            {email:"ltchakoumi@gmail.com", pwd:"lorrain", id:2, type:"client"},
            {email:"lortchakoumi@outlook.com", pwd:"lorrain", id:3, type:"client"},
            {email:"lorraintchakoumi@outlook.com", pwd:"lorrain", id:4, type:"restaurant"},
            {email:"lorraintchakoumi@gmail.com", pwd:"lorrain", id:5, type:"restaurant"},
        ],
        login:"lorraintchakoumi@outlook.com",
        mdp:null,
        affiche:false,
        userType:"restaurant"
    }
    
    
    handleClick = async () =>{

        const {users, affiche, userType, login} = this.state
        let value=users.find(user=>{
                return user.email===login
        })
        try {
            !value.type ? (
                alert("User does not exist")
                ):(
                    await  this.setState({
                        userType:value.type,
                        affiche:!affiche,
                    })
                )
        } catch (error) {
            alert(error.message)
        }
    }
                
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        let {affiche,userType} = this.state;
        console.log(affiche)
        console.log(userType)
        
        if(affiche){ return(
            <div>
                <div>
                    <Header />
                </div>
                <div className="imageFont">    
                    <div className="logoConnexion"> <LogoCenter /></div>
                    <div className="titleConnexion"><p>Connectez-vous pour de meilleurs decouvertes</p></div>
                    <div className = "pageConnexion">
                        <form onSubmit={this.handleSubmit}>
                            <div className="connectezVs">
                                <input className="loginInput" type = 'text' id = 'login' placeholder = "Email" size="40" onChange={this.handleChange} />
                                <input className="loginInput" type = 'password' id = 'mdp' placeholder = "MotDePasse" size="40" onChange={this.handleChange} />
                            </div>

                            <div className="bouttonConnect">
                                <BrowserRouter>
                                <div><Link className="connect" to={`/${userType}`+'te'} id="connexion" size="15"onClick={this.handleClick}>Connexion</Link></div>
                                <div><Link id="creerCompte" to= "/login" onClick={this.handleClick}>creer un compte</Link></div>
                                </BrowserRouter>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )}
        else{return(
            <div className="bouttonConnect">
                <h1>hello World</h1>
                                <p>{console.log(userType)}</p>
                <BrowserRouter>
                <div><Link className="connect" to={`/${userType}`+'test'} id="connexion" size="15"onClick={this.handleClick}>Connexion</Link></div>
                </BrowserRouter>
            </div>
        )}
    }
}

// {()=>{
//     let user = this.doesUserExist;
//     return(`/${user.type}`)
//     }

export default Connexion;