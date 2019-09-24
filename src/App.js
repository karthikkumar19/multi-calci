import React,{Component} from 'react';
import Resultcomponent from './results/resultcomponent';
import Keypadcomponent from './keypadcomponents/keypadcomponents';
import './App.css';

class App extends Component {

state={
  results:'',
  temp:''
}

onClick = (button) =>{
if(button === "9"){
  var newresult = this.state.results.concat('9');
this.setState({ results:newresult })
}
else if(button === "8"){
  var newresult = this.state.results.concat('8');
  console.log(newresult);
this.setState({ results:newresult })
}
else if(button === "+"){
  var temp = this.state.results;
  var temp2 = this.state.temp;
  temp = parseInt(temp) + parseInt(temp2);
  // this.state.temp = parseInt(this.state.results) + parseInt(this.state.temp);
  console.log(parseInt(temp));
this.setState({ results:'' })
}
else if(button === "="){
  var newresult = this.state.temp;
  console.log(newresult);
var results = this.state.results;
console.log(results);
this.setState({ results:newresult }) 
}
}

  render(){


    return (
      <div className="App">
        <h1>hello</h1>
        <Resultcomponent results={this.state.results}></Resultcomponent>
        <Keypadcomponent onClick={this.onClick}></Keypadcomponent>
      </div>
    );
  }
  
}

export default App;
