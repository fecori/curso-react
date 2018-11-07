import React, {Component} from 'react'
import fetch from 'isomorphic-unfetch'

export default class Galeria extends Component {

    constructor(props) {
        super(props);
        this.state = {
            picture: {}
        }
    }

    componentWillMount() {
        fetch('http://www.json-generator.com/api/json/get/ceNzGkwtWq?indent=2')
            .then(r => r.json())
            .then(data => {
                this.setState({
                    picture: data
                })
            }).catch(err => {
            console.log('Error!', err);
        });
    }

    render() {
        const {picture} = this.state;
        let contPicture = null;

        if (picture.length) {
            contPicture = picture.map((image, key) => <div key={key}><img src={image.picture} alt=""/></div>)
        }

        return <div>
            {contPicture}
        </div>;
    }
}