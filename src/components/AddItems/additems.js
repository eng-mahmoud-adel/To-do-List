import React, {Component} from 'react';
import './additems.css';

class AddItems extends Component {

    state= {
        name: "",
        age: "",
        action: "x"
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.name.value === "") {
            return false;
        } else {
            this.props.addItem(this.state);
            this.setState({
            name: "",
            age: ""
        })
        }
    }

    render () {
        return (
            <div className= "add-items">
                <form onSubmit= {this.handleSubmit}>
                    <input type= "text" name= "name" placeholder= "Enter name..." value= {this.state.name} onChange= {this.handleChange} className= "input-1"></input>
                    <input type= "number" name= "age" placeholder= "Enter age..." value= {this.state.age} onChange= {this.handleChange} className= "input-2"></input>
                    <button className= "input-3">Add</button>
                </form>
            </div>
        )
    }
}

export default AddItems;