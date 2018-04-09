
import React, { Component } from 'react';

import ChanpingGuanli from "../../containers/ChanpingGuanli.js";

export default class YanseDingyi extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <ChanpingGuanli k="YanseDingyi" c="颜色定义">
                <div>
                    颜色定义
                </div>
            </ChanpingGuanli>
        )
    }
}