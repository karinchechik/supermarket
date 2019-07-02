import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react';
import { products } from '../pages/calculate';

class CartRow extends Component {
    render(){
        const item = this.props.item;
        return (
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        <Header.Content>
                            {item}
                            <Header.Subheader>{products[item].coupon}</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Table.Cell>
                <Table.Cell>{products[item].price}</Table.Cell>
            </Table.Row>
        )
    }
}

export default CartRow;