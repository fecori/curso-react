import Layout from '../components/layouts';
import React, {Component} from "react";

export default class Index extends Component {

    componentDidMount = () => {
        /*if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/sw.js")
                .catch(err => console.error("Service worker registration failed", err));
        } else {
            console.log("Service worker not supported");
        }*/
    };

    render() {
        return <Layout title="Titulo del Home">
            <p style={{color: 'blue'}}>Hellos Next.js</p>
        </Layout>
    }
}