import React, {Component} from 'react';
import Head from 'next/head';

import Header from '../components/header';
import Footer from '../components/footer';

import style from './style.scss';

export default class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: (props.title) ? props.title : 'Titulo Por defecto',
            type: (props.type) ? props.type : 'article',
            url: (props.url) ? props.url : 'https://larepublica.pe',
            image: (props.image) ? props.image : 'http://prod.static.larepublica.pe/assets/images/larepublica/design/sprite/logo-glr-normal-720x405.jpg',
        }
    }

    render() {
        const {title, type, url, image} = this.state;
        return <div className={style.contenedorLayout}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="theme-color" content="#000000"/>
                <title>{title}</title>
                <meta property="og:type" content={type}/>
                <meta property="og:title" content={title}/>
                <meta property="og:url" content={url}/>
                <meta property="og:image" content={image}/>
            </Head>
            <Header/>
            {this.props.children}
            <Footer/>
        </div>
    }
}