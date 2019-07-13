import React from 'react';
import classes from '../index.css'

const ToggleChart = (props) => {
    return (
        <button className={classes.toggleBtn} onClick={props.ToggleChart}>{props.children}</button>
    );
};

export default ToggleChart;