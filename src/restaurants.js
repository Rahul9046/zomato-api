import React from 'react';
import './restaurants.css';
import Restaurant from './restaurant.js'

const Restaurants = (props)=> {
    let restaurants = props.restaurants;
    restaurants = restaurants.map((item, index)=>{
        return (
            <Restaurant key={index} details={item.restaurant}/>
        );
    });
    if (restaurants.length){
        return (
            <div className="restaurants-container">
                {restaurants}
            </div>
        );
    } else if (props.userSearch){
        return (
            <div className="restaurants-container">
                Sorry there are no restaurants in your area!
            </div>
        );
    } else{
        return (
            <div className="restaurants-container">
            </div>
        );
    }
}
export default Restaurants;