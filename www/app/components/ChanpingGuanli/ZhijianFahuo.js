import React, { Component } from 'react';

import ChanpingGuanli from "../../containers/ChanpingGuanli.js";

export default class ZhijianFahuo extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <ChanpingGuanli k="ZhijianFahuo" c="质检发货">
                <div>
                    质检发货
                </div>
            </ChanpingGuanli>
        )
    }
}