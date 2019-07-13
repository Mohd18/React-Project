import React from 'react';
import classes from '../index.css'

const ButtonsList = (props) => {
    return (
        <div className={classes['earthquake-btn-select']}>
            <button className={classes.btn} onClick={props.Earthquakes_PastHour}>Earthquakes Past Hour</button>
            <button className={classes.btn} onClick={props.Earthquakes_PastDay}>Earthquakes Past Day</button>
            <button className={classes.btn} onClick={props.Earthquakes_PastWeek}>Earthquakes Past Week</button>
            <button className={classes.btn} onClick={props.Earthquakes_PastMonth}>Earthquakes Past Month</button>
        </div>
    );
}

export default ButtonsList;