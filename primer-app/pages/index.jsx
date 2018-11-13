import React, {Component} from 'react';
import Head from "next/head";
import Link from "next/link";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";

import Menu from '../components/menu';

import logo from '../static/logo.svg';

import style from './style-index.scss';

export default class Home extends Component {
    render() {

        let items = [
            {
                id: 0,
                titulo: "Uno",
                href: 'https://google.com'
            },
            {
                id: 1,
                titulo: "Dos",
                href: 'https://friki.pe'
            }
        ];

        return <div className={style.comp_home}>
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
                    <Col md={12}>
                        <p>Hola Mundo</p>
                        <Link href="/demo">
                            <a>Pagina Demo</a>
                        </Link>
                        <Menu items={items}/>
                        <p>
                            <img src={logo} alt=""/>
                        </p>
                    </Col>
                </Row>
            </Grid>
        </div>
    }
}