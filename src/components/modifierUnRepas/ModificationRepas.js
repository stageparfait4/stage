import React, { Component } from 'react';
import Modif from '../ModifRepasComponent/Modif';
import logo from '../../assets/ndole.jpg'
import './ModificationRepas.css'
// import './Modif.css';

const Modification =({mealData})=>{

    {
        return(
            <div className = "page">
                <Modif photo={mealData}/>
            </div>
        )
    }
}

export default Modification;