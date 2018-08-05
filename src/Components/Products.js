import React, {Component} from 'react';
import ProductItem from './ProductItem.js';
import intermodalContainer from '../Assets/intermodal_container.jpg'
import './Products.css';

let keyCounter = 0;

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoInput: '',
      productList: [
        {
          id: keyCounter++,
          image: intermodalContainer,
          description: 'A large standardized shipping container, designed and built for intermodal freight transport.'

        },
        {
          id: keyCounter++,
          image: intermodalContainer,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: keyCounter++,
          image: intermodalContainer,
          description: 'Fusce rutrum mauris aliquam, elementum erat nec, venenatis nibh.'
        },
        {
          id: keyCounter++,
          image: intermodalContainer,
          description: 'Proin id ligula nec libero condimentum convallis.'
        },
      ],
    };
  }

  render() {
    return (
      <div className="Products">
        <h1>Products</h1>
        <div style={{display: 'flex'}}>
          {this.state.productList.map((productItem, index) => (
            <ProductItem key={productItem.id} imagePath={productItem.image} imageDescription={productItem.description}/>
          ))}
        </div>

      </div>
    );
  }
}

export default TodoList;
