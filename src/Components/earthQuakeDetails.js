import React from "react";
import classes from '../index.css'

const EarthQuakeDetails = (props) => {
    return (
        <div className ={classes['earthquake-details']}>
            <p>An earthquake happened at {props.place}</p>
            <p>The magnitude level is {props.mag}</p>
        </div>
    );
}


export default EarthQuakeDetails;