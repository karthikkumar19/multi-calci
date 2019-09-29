import React from 'react';
import classes from './Results.module.css'

const resultcomponent = (props) =>{
    return (
        <div className={classes.Results}>
                <p>{props.results}</p>
            </div>
    )
}


export default resultcomponent;
