

import React, { Component } from 'react';

import ChanpingGuanli from "../../containers/ChanpingGuanli.js";

export default class FeiliaoChuli extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <ChanpingGuanli k="FeiliaoChuli" c="废料处理">
                <div>
                    废料处理
                </div>
            </ChanpingGuanli>
        )
    }
}