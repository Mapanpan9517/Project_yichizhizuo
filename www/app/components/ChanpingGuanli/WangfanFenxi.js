
import React, { Component } from 'react';

import ChanpingGuanli from "../../containers/ChanpingGuanli.js";

export default class WangfanFenxi extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <ChanpingGuanli  k="WangfanFenxi" c="外返分析">
                <div>
                    外返分析
                </div>
            </ChanpingGuanli>
        )
    }
}