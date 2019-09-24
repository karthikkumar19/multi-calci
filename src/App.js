import React,{Component} from 'react';
import Resultcomponent from './results/resultcomponent';
import './App.css';

class App extends Component {

state={
  results:'hello'
}

  render(){


    return (
      <div className="App">
        <h1>hello</h1>
        <Resultcomponent results={this.state.results}></Resultcomponent>
      </div>
    );
  }
  
}

export default App;
