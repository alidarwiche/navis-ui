import React, {Component} from 'react'
import Check from 'react-icons/lib/fa/check'
import Times from 'react-icons/lib/ti/times'
import './TodoItem.css'


class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: false,
    };
  }

  mouseOut() {
    this.setState({onHover: false});
  }

  mouseOver() {
    this.setState({onHover: true});
  }

  render() {
    return (
      <div className="TodoItem" onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.mouseOver.bind(this)}>
          <div className="TodoItemInner">
            <Check size={20} style={{height:'100%',color:'#e9e9e9', padding:'0px 10px 0px 10px'}} />
            <p style={{margin:'10px'}}> {this.props.todoValue} </p>
          </div>
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
