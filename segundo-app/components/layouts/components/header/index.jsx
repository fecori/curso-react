import React, {Component} from 'react';
import Link from 'next/link';

export default class LayoutHeader extends Component {
    render() {
        return <div>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contactenos">
                        <a>Contactenos</a>
                    </Link>
                </li>
                <li>
                    <Link href="/noticias">
                        <a>Noticias</a>
                    </Link>
                </li>
            </ul>
        </div>
    }
}