import React, {Component} from 'react';
import Plus from 'react-icons/lib/fa/plus';
import TodoItem from './TodoItem.js';
import './TodoList.css';

let keyCounter = 0;

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoInput: '',
      todoList: [],
    };
  }

  addTodoItem() {
    const newItem = {
      id: keyCounter++,
      value: this.state.todoInput
    }
    this.state.todoList.push(newItem);
    this.setState({
      todoInput: '',
    });
  }

  // private method
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.addTodoItem();
    }
  }

  handleChangeInput(event) {
    this.setState({
      todoInput: event.target.value
    });
  }

  deleteItem(index) {
    this.state.todoList.splice(index,1);
    this.setState({
      todoList: this.state.todoList,
    });
  }

  render() {
    return (
      <div className="Todo">
        <div className="Todo-column" style={{textAlign: 'left', width: '45%', paddingRight: '75px'}} >
          <h1 style={{margin: '0px 0px 10px 0px'}}>To-Do List</h1>
          <div style={{display:'flex', border: '2px solid #ccc', borderRadius: '4px', boxSizing: 'border-box'}}>
            <input
              placeholder='What needs to be done?'
              style={{width:'100%'}}
              type='text'
              name='todoInput' value={this.state.todoInput}
              onChange={this.handleChangeInput.bind(this)}
              onKeyPress={this.handleKeyPress.bind(this)}
            />
            <Plus
              style={{padding: '10px', backgroundColor: 'white', borderRight: '4px'}}
              onClick={this.addTodoItem.bind(this)}
            />
          </div>
          <p>To add an item to your To-Do list type it in the field above and press enter or click the plus icon.</p>
        </div>
        <div className="Todo-column" style={{display: 'inline-flex', flexDirection: 'column', flexWrap: 'wrap', marginTop:'40px', width: '55%'}}>
          {this.state.todoList.map((todoItem, index) => (
            <TodoItem key={todoItem.id} todoValue={todoItem.value} deleteCallback={this.deleteItem.bind(this, index)} />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
