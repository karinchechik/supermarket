import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import CartRow from './cartRow';


function Rows(items) {
    return items.map( (item, index) =>
        <CartRow key={index} item={item}></CartRow>
    );
}

class Cart extends Component {

    render(){
        const items = this.props.items;
        return (
            <Table.Body>
                {Rows(items)}
            </Table.Body>
        )
    }
}

export default Cart;