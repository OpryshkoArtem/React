import React, { Component } from 'react';
import ProductsList from './ProductsList.jsx';
import CartTitle from './CartTitle.jsx';

class ShoppingCart extends Component {
  state = {
    cartItems: [
      {
        id: '1',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: '2',
        name: 'iPad Pro',
        price: 799,
      },
      {
        id: '3',
        name: 'iPad Max',
        price: 1099,
      },
      {
        id: '4',
        name: 'Vertu',
        price: 2000,
      },
      {
        id: '5',
        name: 'Asus',
        price: 549,
      },
      {
        id: '6',
        name: 'Samsung',
        price: 899,
      },
      {
        id: '7',
        name: 'Nokia',
        price: 50,
      },
    ],
  };

  render() {
    const count = this.state.cartItems.length;
    return (
      <div className="column">
        <CartTitle userName={this.props.userName} count={count} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default ShoppingCart;
