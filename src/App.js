import React from 'react';
import './App.scss';
import Tier from './components/Tier/Tier';

class App extends React.Component{
  state={
    tierTemplate: [{name: 'S', color: 'ff797c'}, {name: 'A', color: 'febf7a'}, {name: 'B', color: 'ffff75'}, {name: 'C', color: '80ff78'}, {name: 'D', color: '7dbcff'}, {name: 'E', color: '7c71ff'}, {name: 'F', color: 'ff6cff'}] 
  }
  
  render(){
    return (
      <div className="app">
        {this.state.tierTemplate.map(
          tier => <Tier name={tier.name} color={tier.color}/>
        )}
      </div>
    );
  }
}

export default App;
