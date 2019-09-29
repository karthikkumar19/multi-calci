import React from 'react';
import classes from './Button.module.css';

const button = (props) =>{
    let attachedClasses = [classes.Button];
    if (props.operator) {
        attachedClasses = [ classes.Controls];
    }
    return(
    
            <button  className={attachedClasses.join(" ")} name={props.children} onClick={e => props.onClick(e.target.name)}>
            {props.children}
            </button>
    )
}

export default button;