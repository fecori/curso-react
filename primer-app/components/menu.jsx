import React, {Component} from 'react';

export default class Menu extends Component {

    render() {
        const {items} = this.props;
        console.log(items);
        return <ul>
            {items ? items.map(item => <li key={item.id}>
                <a href={item.href}>{item.titulo}</a>
            </li>) : <li>No hay nada cho</li>}
        </ul>
    }

}