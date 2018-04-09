import React, { Component } from 'react';
import {connect} from "dva";
import App from "./App";


class Shouye extends Component {
    render() {
        return (
            <App k="Shouye">
                <div>
                    {this.props.children}
                </div>
            </App>
        )
    }
}
export default connect()(Shouye)