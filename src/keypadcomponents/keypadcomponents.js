import React from 'react';
import Button from './button';

const keypadcomponents = (props) =>{

return(
    <div>
        <Button onClick={props.onClick}>9</Button>
        <Button onClick={props.onClick}>8</Button>
        <Button onClick={props.onClick}>7</Button>
        <Button onClick={props.onClick}>6</Button>        
        <br></br>
        <Button onClick={props.onClick}>5</Button>
        <Button onClick={props.onClick}>4</Button>
        <Button onClick={props.onClick}>3</Button>
        <Button onClick={props.onClick}>2</Button>
        <br></br>
        <Button onClick={props.onClick}>1</Button>
        <Button onClick={props.onClick}>0</Button>
        <Button onClick={props.onClick}>+</Button>
        <Button onClick={props.onClick}>-</Button>
        <Button onClick={props.onClick}>*</Button>
        <br></br>
        <Button onClick={props.onClick}>/</Button>
        <Button onClick={props.onClick}>=</Button>
        <Button onClick={props.onClick}>CE</Button>


    </div>
)


}

export default keypadcomponents;