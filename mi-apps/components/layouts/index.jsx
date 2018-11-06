import React, {Component} from 'react';
import Header from '../header';
import Footer from '../footer';
import Head from "next/head";

export default class Layout extends Component {
    render() {
        const {children, title} = this.props;
        return <div className="container">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="theme-color" content="#000000"/>
                <title>{title}</title>
                <link rel="manifest" href="/static/manifest.json"/>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </div>
    }
};