import React from 'react'
import Logo from './navLogo/logo'
import Nav from './navigation/Navigation'
import {BrowserRouter, Route} from 'react-router-dom'
import Connexion from '../pageConnexion/connectezVs';
import RestoCarte from '../restoCarte/RestoCarte'

 const Header = () => {
    return (
        <BrowserRouter>
            <div className="navContainer">
                <div className="logo"><Logo /></div>
                <div className="links"><Nav /></div>
                <Route path="/connexion" component={Connexion} />
                <Route path = '/restoCarte' component={RestoCarte} />
                {/* <Route path = '/' component={AjouterRepas} />
                <Route path = '/' component={Parametres} />
                <Route path = '/' component={Deconnexion} /> */}
            </div>
        </BrowserRouter>
    )
}
export default Header