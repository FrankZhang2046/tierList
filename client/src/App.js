import React from 'react';
import './App.scss';
import axios from 'axios';

import Tier from './components/Tier/Tier';
import StagingArea from './components/StagingArea/StagingArea';

class App extends React.Component{
  state={
    tierTemplate: [{name: 'S', color: 'ff797c'}, {name: 'A', color: 'febf7a'}, {name: 'B', color: 'ffff75'}, {name: 'C', color: '80ff78'}, {name: 'D', color: '7dbcff'}, {name: 'E', color: '7c71ff'}, {name: 'F', color: 'ff6cff'}],
    stagingAreaStack: [], 
  }
  
  componentDidMount(){
    axios.get('http://localhost:8080/')
        .then((response)=>{
          response.data.files.map(
            image => this.setState({stagingAreaStack: this.state.stagingAreaStack.concat(response.data.path += image)})
          )
        })
  }

  render(){
    return (
      <div className="app">
        {this.state.tierTemplate.map(
          tier => <Tier name={tier.name} color={tier.color}/>
        )}
        <StagingArea cards={this.state.stagingAreaStack}/>
      </div>
    );
  }
}

export default App;
