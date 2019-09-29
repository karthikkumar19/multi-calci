import React,{Component} from 'react';
import Resultcomponent from './results/resultcomponent';
import Keypadcomponent from './keypadcomponents/keypadcomponents';
import './App.css';

class App extends Component {

state={
  results:'',
  previousnumber:'',
  currentnumber:'',
  operator:''
}

isOperator = (button) =>{
   if(button === '+'){
    return false;
   } 
   else if(button === '-'){
     return false;
   }
   else if(button === '*'){
    return false;
  }
  else if(button === '/'){
    return false;
  }
  else if(button === 'CE'){
    return false;
  }
   else if(button === '='){
     return false
   }
   else return true;
}

onClick = (button) =>{
if(this.isOperator(button) ){
this.setState({ results: this.state.results + button })
}

else if(button === "+" && this.state.results!==''){
  var prevno = this.state.results;
  var resultcpy = {...this.state};
  resultcpy.previousnumber = this.state.results;
  resultcpy.operator = 'plus';
  this.setState({ results:'',previousnumber:resultcpy.previousnumber,operator:resultcpy.operator });
  
  console.log(this.state.previousnumber);
  console.log(this.state.operator);
  
}
else if(button === "-" && this.state.results!==''){
   prevno = this.state.results;
  this.setState({previousnumber:prevno})
  this.setState({ results:'',operator:'sub' })
  console.log("sub")
}

else if(button === "*" && this.state.results!==''){
   prevno = this.state.results;
  this.setState({previousnumber:prevno})
  this.setState({ results:'',operator:'mul' })
  console.log("mul")
}

else if(button === "/" && this.state.results!==''){
   prevno = this.state.results;
  this.setState({previousnumber:prevno})
  this.setState({ results:'',operator:'div' })
  console.log("div")
}

else if(button === "CE" && this.state.results!==''){
 this.setState({previousnumber:''})
 this.setState({ results:'',operator:'' })
 console.log("cleared")
}
else if(button === "="){
// this.state.currentnumber = this.state.results;

  if(this.state.operator === 'plus'){
    this.setState({
      results:parseInt(this.state.previousnumber) + parseInt(this.state.results)
    });
    this.setState({operator:''})
  }
    else if(this.state.operator === 'sub'){
      this.setState({
        results:parseInt(this.state.previousnumber) - parseInt(this.state.results)
      });
      this.setState({operator:''})
    }

      else if(this.state.operator === 'mul'){
        this.setState({
          results:parseInt(this.state.previousnumber) * parseInt(this.state.results)
        });
        this.setState({operator:''})
      }

        else if(this.state.operator === 'div'){
          this.setState({
            results:parseInt(this.state.previousnumber) / parseInt(this.state.results)
          });
          this.setState({operator:''})

    }
}
}

  render(){


    return (
      <div className="App">
        <h1>Multi Calci</h1>
        <div className="Calci">
        
        <Resultcomponent results={this.state.results}></Resultcomponent>
        <Keypadcomponent onClick={this.onClick} operator={this.isOperator}></Keypadcomponent>
        </div>  
      </div>
    );
  }
  
}

export default App;
