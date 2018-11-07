import Layout from '../components/layouts';
import React, {Component} from "react";
import Galeria from '../components/galeria';
import Formulario from '../components/formulario';

export default class Index extends Component {

    render() {
        return <Layout title="Titulo del Home">
            <p style={{color: 'blue'}}>Hellos Next.js</p>
            {/*<Galeria/>*/}
            <Formulario/>
        </Layout>
    }
}