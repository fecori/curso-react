import React, {Component} from 'react';
import LayoutMaster from '../components/layouts/master';
import Contactenos from '../components/contactenos';

export default class PageContactenos extends Component {

    render() {
        let datos = {
            nombre: 'Rita Vikenzi',
            apellidos: 'Devs',
        };
        return <LayoutMaster
            title="Contactenos"
            type="article"
            url="https://google.com/"
            image="https://img.europapress.es/fotoweb/fotonoticia_20180318105841_640.jpg">
            <Contactenos/>
        </LayoutMaster>
    }
}