import React, {Component} from 'react';
import './location.css'

class Location extends Component{
    state = {
        latitude: undefined,
        longitude: undefined,
        restaurants: []
    }
    handleLocation = ()=>{
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                let {latitude, longitude} = position.coords;
                document.getElementById('lat').value = latitude;
                document.getElementById('long').value = longitude;
            });
        } else{
            alert('Geolocation is not supported for your browser. Please enter the location manually');
        }
    }
    handleRestaurantSearch = ()=>{

    }
    render(){
        return (
            <div className="location-conatiner">
                <input type="text" id="lat" className="location-input" placeholder="Latitude"/>
                <input type="text" id="long" className="location-input" placeholder="Longitude"/>
                <button onClick = {this.handleLocation} className="findme-button">DETECT MY LOCATION</button>
                <button onClick = {this.handleRestaurantSearch} className="search-button">FIND RESTAURANTS</button>
                <br/>
                <hr className="divider"/>
            </div>
        );
    }
}
export default Location;