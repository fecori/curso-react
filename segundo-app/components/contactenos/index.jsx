import React, {Component} from 'react';
import BotonURL from '../compartidos/boton-url';

import style from './style.scss';

export default class Contactenos extends Component {

    render() {
        return <div className={style.componenteContactenos}>
            <p>pagina contactenos</p>
            <BotonURL/>
        </div>
    }
}