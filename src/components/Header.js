import React, {Component} from 'react';
import "../styles/Header.css";

class Header extends Component {
    render() {
        return (
            <div className="home-body">
                <header className="header">
                        <h1 className="title">Pups Dot Com</h1>
                </header>
                <h4 className="intro">For those of us who need a reminder that not all is bad in the world.</h4>

            </div>
        )
    }
}

export default Header