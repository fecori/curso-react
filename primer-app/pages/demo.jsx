import React, {Component} from 'react';

import Head from 'next/head';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from "react-bootstrap/lib/Button";

import style from './syle-demo.scss';
import Link from "next/link";

export default class Demo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            conteo: 0,
            fontColor: props.color || '#FFFFFF',
            fontBackground: props.background || '#8c8c8c'
        };

        this.actualiza = this.actualiza.bind(this);

    }

    actualiza() {
        let {conteo} = this.state;
        this.setState({conteo: conteo + 1});
    }

    render() {

        let resultado = this.state.conteo;
        let {fontColor, fontBackground} = this.state;

        return <div className={style.comp_demo}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"/>
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <Grid>
                <Row>
                    <Col md={12} className={`btn-primary ${style.colprueba}`}>
                        <p style={{color: fontColor, background: fontBackground}}>Hola Mundos</p>
                        <Link href="/">
                            <a>Pagina Inicio</a>
                        </Link>

                        <p>
                            <Button onClick={this.actualiza}>Actualiza</Button>
                        </p>

                        <p>No quiero</p>
                        <p>No quiero</p>
                        <p>No quiero</p>
                        <p>No quiero</p>
                        {/*<p>No quiero</p>*/}
                        {/*<p>No quiero</p>*/}
                        {/*<p>No quiero</p>*/}

                        <div id="resultados">{resultado}</div>

                    </Col>
                </Row>
            </Grid>
        </div>
    }

}