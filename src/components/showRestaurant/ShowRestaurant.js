import React, { Component } from 'react'
import Restaurant from '../restaurant/Restaurant'
import restau from '../../assets/koki2'
import Carte from '../carteClient/Carte'

class ShowRestaurant extends Component {
    state={
        restaurantList:[
            {restau:restau, name:'Alio', location:'Bangangte', id:1},
            {restau:restau, name:'Santa', location:'Douala', id:2},
            {restau:restau, name:'Lucia', location:'Yaounde', id:3},
            {restau:restau, name:'Claus', location:'Bamenda', id:4},
            {restau:restau, name:'Tombins', location:'Garoua', id:5},
            {restau:restau, name:'Yahou', location:'Mbanga', id:6},
            {restau:restau, name:'Tagoo', location:'Edea', id:7},
            {restau:restau, name:'EAzy', location:'Bafoussam', id:8},
            {restau:restau, name:'Kargo', location:'Yagoua', id:9},
            {restau:restau, name:'Mami Koki', location:'Ngoundere', id:10},
            {restau:restau, name:'Mami Eru', location:'Buea', id:11},
            {restau:restau, name:'Mami Ndole', location:'Limbe', id:12},
            {restau:restau, name:'Mami Achu', location:'Kumba', id:13},
            {restau:restau, name:'Mami Planti', location:'Kumbo', id:14}
        ],
        restauId:null,
        affiche:false
    }

    handleClick= async (id)=>{
        await this.setState({
            restauId:id,
            affiche:true
        })

        console.log(this.state.restauId)
        console.log(this.state.affiche)
    }

    render() {
        return !this.state.affiche?(
            <div>
                <Restaurant restaurants={this.state.restaurantList} handle={this.handleClick} />
            </div>
        ):(
            <div>
                <div>
                    <Restaurant restaurants={this.state.restaurantList} handle={this.handleClick} />
                </div>
                <div><Carte restoId={this.state.restauId} /></div>
            </div>
        )
    }
}

export default ShowRestaurant