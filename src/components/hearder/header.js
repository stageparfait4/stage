import React from 'react'
import Logo from './navLogo/logo'
import Nav from './navigation/Navigation'
import {BrowserRouter, Route} from 'react-router-dom'
import Connexion from '../pageConnexion/connectezVs';
import DemoPage from '../demos/DemoPage'
// import RestoCarte from '../restoCarte/RestoCarte'

 const Header = () => {
    return (
        <BrowserRouter>
        <fragment>
            <div className="navContainer">
                <div className="logo"><Logo /></div>
                <div className="links"><Nav /></div>
                {/* <Route path = '/' component={AjouterRepas} />
                <Route path = '/' component={Parametres} />
                <Route path = '/' component={Deconnexion} /> */}
                {/* <Route path = '/' component={Deconnexion} /> } */}
            </div>
            <div>
                <Route path="/connexion" component={Connexion} />
                <Route path = '/DemoPage' component={DemoPage} />
                </div>
                </fragment>
        </BrowserRouter>
    )
}
export default Header