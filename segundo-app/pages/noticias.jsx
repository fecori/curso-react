import React, {Component} from 'react';
import LayoutMaster from '../components/layouts/master';
import Noticias from '../components/noticias';

export default class PageNoticias extends Component {
    render() {
        return <LayoutMaster title="Noticias">
            <Noticias/>
        </LayoutMaster>
    }
}