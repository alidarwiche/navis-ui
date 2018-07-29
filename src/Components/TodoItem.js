import React, {Component} from 'react'
import Check from 'react-icons/lib/fa/check'
import Times from 'react-icons/lib/ti/times'
import './TodoItem.css'


class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TodoItem">
          <div style={{backgroundColor: 'white', width:'100%', display: 'inline-flex'}}>
            <Check size={20} style={{height:'100%',color:'#e9e9e9', padding:'0px 10px 0px 10px'}} />
            <p style={{margin:'10px'}}> help </p>
          </div>
          <Times size={20} style={{height:'100%', padding:'10px'}} />
      </div>
    )
  }
}

export default TodoItem;
