import React, {Component} from 'react';
import './location.css'

class Location extends Component{
    handleClick = ()=>{
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
    render(){
        return (
            <div className="location-conatiner">
                <input type="text" id="lat" className="location-input" placeholder="Latitude"/>
                <input type="text" id="long" className="location-input" placeholder="Longitude"/>
                <button onClick = {this.handleClick} className="findme-button">DETECT MY LOCATION</button>
            </div>
        );
    }
}
export default Location;