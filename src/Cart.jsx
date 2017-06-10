import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emptyCart } from './actions';

class Cart extends Component {

  constructor(props) {
    super(props);
    // Store.getState().cart
    // this.state = { cart: Store.getState().cart};

    //this.props.cart //Store.getState().cart
  }

  render() {
    return (
      <div>
        <h1>Cart</h1>
        <div>Eventually this would display our cart</div>
        {
          this.props.cart.map(c => {
            <div>{c.quantity}</div>;
          })
        }
        {/*<button onClick={this.props.emptyCart()}>Empty Cart</button>*/}
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    emptyCart(){
      dispatch(emptyCart());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);