import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

const Layout = (props) => (
    <Grid stackable columns={2}>
        <Grid.Column>
            <Header dividing size='huge' textAlign='center' color='blue' style={{ fontFamily: 'Palatino Linotype' }}>
                Products
            </Header>
            {props.children[0]}
        </Grid.Column>
        <Grid.Column>
            <Header dividing size='huge' textAlign='center' color='blue' style={{ fontFamily: 'Palatino Linotype' }}>
                My Cart
            </Header>
            {props.children[1]}
        </Grid.Column>
    </Grid>
)

export default Layout;