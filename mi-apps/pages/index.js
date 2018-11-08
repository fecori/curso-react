import Layout from '../components/layouts';
import React, {Component} from "react";
import Galeria from '../components/galeria';
import Formulario from '../components/formulario';
import Mensajes from '../components/mensajes';

export default class Index extends Component {

    render() {
        return <Layout title="Titulo del Home">
            <p style={{color: 'blue'}}>Hellos Next.js</p>
            <Formulario/>
            <Mensajes size='25px' color='#ff0000' contenido='HOLA MUNDO' />
            {/*<Galeria/>*/}
        </Layout>
    }
}