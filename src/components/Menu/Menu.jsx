import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Menu} from 'semantic-ui-react'


class MenuComponent extends Component {
    render() {
        return (
            <Menu>
                <Menu.Item
                    name='browse'
                    onClick={this.handleItemClick}
                >
                    Store
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='signup'
                        onClick={this.handleItemClick}
                    >
                        Total
                    </Menu.Item>

                    <Menu.Item
                        name='help'
                        onClick={this.handleItemClick}
                    >
                        Cart
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}
export default MenuComponent;
