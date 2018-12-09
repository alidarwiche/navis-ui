import React, {Component} from 'react';
import './HeaderItem.css';

class HeaderItem extends Component {
  render(){
    return (
      <div className='HeaderItem'>
        <p style={{fontSize: '16px'}}>{this.props.title}</p>
      </div>
    )
  }
}

export default HeaderItem;
