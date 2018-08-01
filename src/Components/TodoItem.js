import React, {Component} from 'react';
import Check from 'react-icons/lib/fa/check';
import Times from 'react-icons/lib/ti/times';
import './TodoItem.css';


class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: false,
      isChecked: false,
    };
  }

  mouseOut() {
    this.setState({onHover: false});
  }

  mouseOver() {
    this.setState({onHover: true});
  }

  completeCallback() {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    const IncompleteTodo = (
      <div className="incompleteTodo">
        <Check size={20} className="incompleteCheck" onClick={this.completeCallback.bind(this)} />
        <p className="incompleteText"> {this.props.todoValue} </p>
      </div>
    );
    const CompletedTodo = (
      <div className="completedTodo">
        <Check size={20} className="completedCheck" onClick={this.completeCallback.bind(this)} />
        <p className="completedText"> {this.props.todoValue} </p>
      </div>
    );

    return (
      <div className="TodoItem" onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.mouseOver.bind(this)}>
          {this.state.isChecked ? CompletedTodo : IncompleteTodo }
          { this.state.onHover
            ? <Times size={20} style={{height:'100%', padding:'10px'}}
                    onClick={this.props.deleteCallback} />
            : <Times size={20} style={{height:'100%', color:'#e9e9e9', padding:'10px'}} />
          }
      </div>
    )
  }
}

export default TodoItem;
