import React, {Component} from 'react';
import './SectionDivider.css';

class SectionDivider extends Component {

  render() {
    return(
      <div className='SectionDivider' style={{backgroundColor: this.props.color}}>
      </div>
    );
  }


}

export default SectionDivider;
