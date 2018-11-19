import React, {Component} from 'react';
import LayoutMaster from '../components/layouts/master';
import PageHome from '../components/home';

export default class Home extends Component {
    render() {
        return <LayoutMaster
            title="Home"
            type="article"
            url="https://google.com/"
            image="https://img.europapress.es/fotoweb/fotonoticia_20180318105841_640.jpg">
            <PageHome
                titulo="Titulo Monchito"
                text="Hola mundo desde el padre"/>
        </LayoutMaster>
    }
}