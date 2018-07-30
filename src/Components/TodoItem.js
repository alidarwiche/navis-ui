import React, {Component} from 'react'
import Check from 'react-icons/lib/fa/check'
import Times from 'react-icons/lib/ti/times'
import './TodoItem.css'


class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
    };
  }

  mouseOut() {
    this.setState({flipped: false});
  }

  mouseOver() {
    this.setState({flipped: true});
  }

  render() {
    return (
      <div className="TodoItem" onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.mouseOver.bind(this)}>
          <div className="TodoItemInner">
            <Check size={20} style={{height:'100%',color:'#e9e9e9', padding:'0px 10px 0px 10px'}} />
            <p style={{margin:'10px'}}> {this.props.todoValue} </p>
          </div>
          {this.state.flipped ? <Times size={20} style={{height:'100%', padding:'10px'}} /> : null }
      </div>
    )
  }
}

export default TodoItem;
