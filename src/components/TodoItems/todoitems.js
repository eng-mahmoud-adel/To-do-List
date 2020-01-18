import React from 'react';
import './todoitems.css';

const TodoItems = (props) => {
    const info = props.info;
    const length = info.length;

    const list =  (length > 0) ? (
        info.map(item => {
            return (
            <ul key= {item.id} className= "inner-data">
                <li>{item.name}</li>
                <li>{item.age}</li>
                <li onClick= {() => props.deleteItem(item.id)}>{item.action}</li>
            </ul>   
            )
        })
    ) : (
         <p>There is no items to show</p>
        )

    return (
        <div className= "todo-items">
            <ul className= "header">
                <li>Name</li>
                <li>Age</li>
                <li>Action</li>
            </ul>
            {list}
        </div>
    );
}

export default TodoItems;