import React from 'react';

const button = (props) =>{
    return(
    
            <button name={props.children} onClick={e => props.onClick(e.target.name)}>
            {props.children}
            </button>
    )
}

export default button;