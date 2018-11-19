import React, {Component} from 'react';

export default class BotonURL extends Component {

    constructor() {
        super();
        this.state = {
            resultURL: 'Resultado URL',
        };
        this.getURL = this.getURL.bind(this);
    }

    getURL() {
        this.setState({resultURL: window.location.href});
    }

    render() {
        const {resultURL} = this.state;
        return <div>
            <p>
                <button onClick={this.getURL}>Dame el HREF pe!</button>
            </p>
            <p>{resultURL}</p>
        </div>
    }
}