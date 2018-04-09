import React, { Component } from 'react';
import {connect} from "dva";
import App from "./App"

class Dingdan extends Component {
    render() {
        return (
            <App k="Dingdan">
                <div>
                    {this.props.children}
                </div>
            </App>
        )
    }
}
export default connect()(Dingdan)