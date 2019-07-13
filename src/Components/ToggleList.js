import React from 'react';
import classes from '../index.css'

const ToggleList =(props) =>{
    return (
        <button className={classes.toggleBtn} onClick={props.ToggleList}>{props.children}</button>
    );
};

 export  default ToggleList;