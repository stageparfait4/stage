import React, { Component } from 'react';
import Modif from '../ModifRepasComponent/Modif';
import logo from '../../assets/ndole.jpg'
import './ModificationRepas.css'
// import './Modif.css';

class Modification extends Component{
    state = {
        photo : [
            {image:logo, id: 1}
        ]
    }
    render(){
        return(
            <div className = "page">
                <Modif photo={this.state.photo}/>
            </div>
        )
    }
}
export default Modification;