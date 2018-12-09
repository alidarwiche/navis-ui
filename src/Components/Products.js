import React, {Component} from 'react';
import ProductItem from './ProductItem.js';
import intermodalContainer from '../Assets/intermodal_container.jpg'
import shipToRail from '../Assets/ship_to_rail.jpeg'
import apmTerminal from '../Assets/apm_terminal.jpg'
import containerShip from '../Assets/container_ship.jpg'
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
          description: 'A shipping container is a large standardized shipping container, designed and built for intermodal freight transport.'

        },
        {
          id: keyCounter++,
          image: shipToRail,
          description: 'Intermodal freight transport involves the transportation of freight in an intermodal container or vehicle without any handling of the freight itself when changing modes'
        },
        {
          id: keyCounter++,
          image: apmTerminal,
          description: 'APM Terminals is an international container terminal operating company headquartered in The Hague, Netherlands'
        },
        {
          id: keyCounter++,
          image: containerShip,
          description: 'Container ships are cargo ships that carry all of their load in truck-size intermodal containers, in a technique called containerization.'
        },
      ],
    };
  }

  render() {
    return (
      <div className="Products">
        <h1>Products</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {this.state.productList.map((productItem, index) => (
            <ProductItem key={productItem.id} imagePath={productItem.image} imageDescription={productItem.description}/>
          ))}
        </div>

      </div>
    );
  }
}

export default TodoList;
