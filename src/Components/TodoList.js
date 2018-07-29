import React, {Component} from 'react'
import Plus from 'react-icons/lib/fa/plus'
import TodoItem from './TodoItem.js'
import './TodoList.css'

class TodoList extends Component {
  // private method
  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log(e.target.value);
    }
  }



  render() {
    return (
      <div className="Todo">
        <div className="Todo-column" style={{textAlign: 'left'}} >
          <h1>To-Do List</h1>
          <div style={{display:'flex', border: '2px solid #ccc', borderRadius: '4px', boxSizing: 'border-box'}}>
            <input placeholder='What needs to be done?' style={{width:'100%'}} type='text' name='todo_item' onKeyPress={this._handleKeyPress} />
            <Plus style={{padding: '10px', backgroundColor: 'white', borderRight: '4px'}}/>
          </div>
          <p>To add an item to your To-Do list type it in the field above and press enter or click the plus icon.</p>
        </div>
        <div className="Todo-column">
          <TodoItem />
        </div>
      </div>
    )
  }
}

export default TodoList;
