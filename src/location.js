import React, {Component} from 'react';
import './location.css'
import axios from 'axios';
import Restaurants from './restaurants.js'
import loader from './loader.gif'

class Location extends Component{
    state = {
        restaurants: [],
        userSearch: false
    }
    handleLocation = ()=>{
        if (navigator.geolocation){
            document.getElementById('loader').style.display = '';
            navigator.geolocation.getCurrentPosition(function(position){
                let {latitude, longitude} = position.coords;
                document.getElementById('lat').value = latitude;
                document.getElementById('long').value = longitude;
                document.getElementById('loader').style.display = 'none';
            });
        } else{
            alert('Geolocation is not supported for your browser. Please enter the location manually');
        }
    }
    handleRestaurantSearch = ()=>{
        let lat = +document.getElementById('lat').value,
            lon = +document.getElementById('long').value,
            comp  =this;
            document.getElementById('loader').style.display = '';
            debugger;
        axios.get('https://developers.zomato.com/api/v2.1/search', { 
            params: { 
                    lat,
                    lon,
                    sort: 'rating',
                    radius: 10000
             },
            headers: {'user-key': 'b53c4652dac57dca5ffe0764a570822a'}
            }).then(function(response){
                debugger;
            document.getElementById('loader').style.display = 'none';
            comp.setState({
                restaurants: response.data.restaurants,
                userSearch: true
            });
        });
    }
    render(){
        return (
            <div className="main-container">
                <div className="location-conatiner">
                    <input type="text" id="lat" className="location-input" placeholder="Enter your Latitude"/>
                    <input type="text" id="long" className="location-input" placeholder="Enter your Longitude"/>
                    <button onClick = {this.handleLocation} className="findme-button">DETECT MY LOCATION</button>
                    <button onClick = {this.handleRestaurantSearch} className="search-button">FIND RESTAURANTS</button>
                    <br/>
                    <hr className="divider"/>
                    <Restaurants restaurants={this.state.restaurants}/>
                </div>
                <div id="loader" style={{display: 'none'}}>
                    <img className="loader-gif" src={loader} alt="loader-gif"></img>
                </div>
            </div>
        );
    }
}
export default Location;