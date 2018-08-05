import React, {Component} from 'react';
import './ProductItem.css';

class ProductItem extends Component {


  render() {
    return(
      <div className='ProductItem'>
        <img className='ProductImage' src={this.props.imagePath} alt=''/>
        <p>{this.props.imageDescription}</p>
      </div>
    );
  }


}

export default ProductItem;
