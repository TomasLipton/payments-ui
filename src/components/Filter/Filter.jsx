import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'


export default class Filter extends Component {
    state = { activeItem: 'all' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary>
                <Menu.Item
                    name='Все'
                    active={activeItem === 'all'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Популярные'
                    active={activeItem === 'messages'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Дорогие'
                    active={activeItem === 'friends'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Дешевые'
                    active={activeItem === 'friends'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Автор'
                    active={activeItem === 'friends'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}
