import React, { Component } from 'react';
import {Card, Table} from 'semantic-ui-react'
//import './App.css';
import Product from './components/shared/product';
import calculator, { products, removeFromBill } from './components/pages/calculate';
import Cart from './components/shared/cart';
import Layout from './components/shared/Layout';

//const userCart = ['milk', 'bread', 'eggs', 'cheese', 'honey', 'water', 'pizza'];

function Bill(props) {
  /*let ans = '';
  for (let i in userCart) {
    ans += `${userCart[i]}: ${calculator(userCart[i])}+`
  }
  return ans;*/
  const items = props.items;
  return items.map( (item, index) =>
    <div key={index}>
      <h1>{item}: {products[item].price}</h1>
      {products[item].coupon !== '' ? <h5>{products[item].coupon}</h5> : ''}
      <p>current total price = {calculator(item)}</p>
    </div>
  );

//  return listItems;
}



function ItemCards(cart, add) {
    let cards = cart.map( (item, index) =>
        <Product key={index} items={item} handleClick={() => {add(item)}} />
    );

    return <Card.Group centered>{cards}</Card.Group>
}

function TableCart(items, totalPrice) {
    return (
        <Table basic='very' celled unstackable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Item</Table.HeaderCell>
                    <Table.HeaderCell>Full Price</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Cart items={items} />
            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell style={{ color: '#2185d0', fontWeight: 'bold' }}>Total Price</Table.HeaderCell>
                    <Table.HeaderCell style={{ color: '#2185d0' }}>{totalPrice}</Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    );
}

class App extends Component {
  state = {
        items: [],
        totalPrice: 0
    }

  render() {
    const userCart = ['milk', 'bread', 'eggs', 'cheese', 'honey', 'water', 'pizza'];
    return (
        <div className="App">
          <header style={{ textAlign: 'center', fontSize: '3em', margin: '25px 0', fontFamily: 'Palatino Linotype' }}>Supermarket</header>
            <Layout>
                {ItemCards(userCart, this.AddToCart)}
                {TableCart(this.state.items, this.state.totalPrice)}
            </Layout>
        </div>
    );
  }

    AddToCart = (item) => {
      let ans = calculator(item);
      console.log(item);
      this.setState({ items: [...this.state.items, item], totalPrice: ans});
    }
}
//<Bill items={userCart} />
//<Product items={userCart} />

export default App;
