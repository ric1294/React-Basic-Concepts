import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Counters from './components/counters'


class App extends Component {
  state = {
    counters : [
        { id : 1 , value: 4},
        { id : 2 , value: 0},
        { id : 3 , value: 0},
        { id : 4 , value: 0},
    ]
  }

handleDelete = productId => {
    console.log(productId);
    const newCounters = this.state.counters.filter(c=>c.id !== productId);
    this.setState({counters : newCounters});
    //console.log(this.state.counters);
};

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
}
render(){
  return (
    <React.Fragment>
    <Header totalNOCounter={this.state.counters.filter(c=> c.value > 0).length}/>
    <main className="container">
        <Counters
          counters={this.state.counters} 
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}  ></Counters>
      </main>
    </React.Fragment>
  );
}
}

export default App;
