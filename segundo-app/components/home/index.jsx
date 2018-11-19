import React, {Component} from 'react';
import logo from '../../static/logo.svg';
import BotonURL from "../compartidos/boton-url";
import styles from './styles.scss';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: (props.titulo) ? props.titulo : 'Titulo por defecto',
            text: (props.text) ? props.text : 'Texto por defecto',
        };
        this.btnFacebook = this.btnFacebook.bind(this);
    }

    btnFacebook() {
        window.open('http://www.facebook.com/sharer.php?s=100&p[title]=Titulo&p[url]=' + encodeURIComponent('https://www.google.com/'), 'fbShareWindow', 'height=450, width=550, top=0, left=0, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    }

    /*componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillMount(){
        console.log('componentWillMount')
    }*/

    render() {
        const {titulo, text, resultURL} = this.state;
        return <div className={styles.contenido}>
            <h1>{titulo}</h1>
            <p>{text}</p>
            <p><img src={logo} alt=""/></p>
            <p>
                <button onClick={this.btnFacebook}>Compartir Facebook</button>
            </p>
            <BotonURL/>
        </div>
    }
}