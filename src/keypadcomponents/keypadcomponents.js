import React from 'react';
import Button from './button';
import classes from './Keypad.module.css';

const keypadcomponents = (props) =>{
  
return(
    <div className={classes.Flex}>
    <div className={classes.Keypad}>
        <Button onClick={props.onClick}>9</Button>
        <Button onClick={props.onClick}>8</Button>
        <Button onClick={props.onClick}>7</Button>
        <Button onClick={props.onClick} operator={props.operator}>+</Button>
        </div>
          <div className={classes.Keypad}>
          <Button onClick={props.onClick}>6</Button>  
          <Button onClick={props.onClick}>5</Button>
        <Button onClick={props.onClick}>4</Button>
        <Button onClick={props.onClick} operator={props.operator}>-</Button>
          </div>    
        <div className={classes.Keypad}>
        <Button onClick={props.onClick}>3</Button>
        <Button onClick={props.onClick}>2</Button>
        <Button onClick={props.onClick}>1</Button>
        <Button onClick={props.onClick} operator={props.operator}>*</Button>
        </div>
        <div  className={classes.Keypad}>
        <Button onClick={props.onClick} >0</Button>
        <Button onClick={props.onClick}  operator={props.operator}>=</Button>
        <Button onClick={props.onClick}   operator={props.operator}>CE</Button>
        <Button onClick={props.onClick} operator={props.operator}>/</Button>
        </div> 
        </div>
)


}

export default keypadcomponents;