import React, {Component} from 'react';
import './App.css';
import TodoItems from './components/TodoItems/todoitems';
import AddItems from './components/AddItems/additems';

class App extends Component {

  state= {
    user: [
    {
      id: 1,
      name: "Mahmoud",
      age: 24,
      action: "x"
    },
    {
      id: 2,
      name: "Ali",
      age: 24,
      action: "x"
    }
  ]
  }

  deleteItem = (id) => {
    let user = this.state.user.filter((item) => item.id !== id)
    this.setState({user: user});
  }

  addItem = (item) => {
    let user = this.state.user;
    user.push(item);
    item.id = this.state.user.length;     // for making a unique key
    this.setState({user: user})
  }

  render() {
    return (
      <div className="App container">
        <h1>Todo List</h1>
        <TodoItems info= {this.state.user} deleteItem= {this.deleteItem}/>
        <AddItems addItem= {this.addItem}/>
      </div>
    );
  }
}

export default App;
